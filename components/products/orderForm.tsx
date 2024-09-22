"use client";

import React, { useState } from "react";
import { isValidEgyptianPhoneNumber } from "@/lib/utils";
import { OrderFormData } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com"; // Import EmailJS

import { Product } from "@/lib/definitions";

export default function OrderForm({ product }: { product: Product }) {
  const [formData, setFormData] = useState<OrderFormData>({
    phoneNumber: "",
    email: "",
    name: "",
  });

  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEgyptianPhoneNumber(formData.phoneNumber)) {
      setPhoneNumberError(true);
      return;
    }

    setPhoneNumberError(false);
    setIsSubmitting(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

    const templateParams: Record<string, unknown> = {
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      name: formData.name,
      productName: product.title,
      productPrice: product.price,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setSuccessMessage("تم إرسال الطلب بنجاح!");
        setFormData({ phoneNumber: "", email: "", name: "" });
      })
      .catch((error) => {
        setErrorMessage("حدث خطأ أثناء إرسال الطلب، حاول مرة أخرى.");
        console.error("EmailJS error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="border p-2 w-72"
        />
        {phoneNumberError && (
          <span className="text-red-500 pr-4">رقم الهاتف غير صالح</span>
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
          value={formData.email}
          onChange={handleChange}
          required
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
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 w-72"
        />
      </div>
      <Button className="self-center w-72" disabled={isSubmitting}>
        {isSubmitting ? "جارٍ الإرسال..." : "إرسال"}
      </Button>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
}
