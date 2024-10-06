"use client";

import emailjs from "emailjs-com";

import { useState } from "react";

import { Product } from "@/lib/definitions";
import { isValidEgyptianPhoneNumber } from "@/lib/utils";

import { Button } from "../ui/button";

export default function OrderForm({ product }: { product: Product }) {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    name: "",
  });

  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const fullFormData = {
      ...formData,
      productName: product.title,
      productPrice: product.price,
    };

    if (!isValidEgyptianPhoneNumber(fullFormData.phoneNumber)) {
      setPhoneNumberError(true);
      return;
    }

    setPhoneNumberError(false);
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        fullFormData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(() => {
        setSuccessMessage("تم إرسال الطلب بنجاح!");
        setFormData({ phoneNumber: "", email: "", name: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setErrorMessage("حدث خطأ أثناء إرسال الطلب، حاول مرة أخرى.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });

    console.log("Submit: ", fullFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="phoneNumber" className="block mb-2">
          رقم الهاتف:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
          className={`border p-2 w-72 ${
            phoneNumberError ? "border-red-500" : ""
          }`}
        />
        {phoneNumberError && (
          <p className="text-red-500 pr-4">رقم الهاتف غير صالح</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">
          البريد الإلكتروني:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-72"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          الاسم:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-72"
        />
      </div>
      <input
        type="hidden"
        id="productName"
        name="productName"
        value={product.title}
      />
      <input
        type="hidden"
        id="productPrice"
        name="productPrice"
        value={product.price}
      />
      <Button className="self-center w-72" disabled={isSubmitting}>
        {isSubmitting ? "جارٍ الإرسال..." : "إرسال"}
      </Button>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
}

// For server-side email sending (future use case)

// const res = await fetch("/api/order", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(fullFormData),
// });

// if (!res.ok) {
//   alert("error");
// }

// const result = await res.json();
// if (!result.success) {
//   alert(result.message);
// }
