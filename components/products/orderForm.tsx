"use client";

import { useState } from "react";
import { Product } from "@/lib/definitions";

import { isValidEgyptianPhoneNumber } from "@/lib/utils";

export default function OrderForm({ product }: { product: Product }) {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    name: "",
  });

  const [phoneNumberError, setPhoneNumberError] = useState(false);

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

    if (!isValidEgyptianPhoneNumber(formData.phoneNumber)) {
      setPhoneNumberError(true);
      return;
    }

    setPhoneNumberError(false);

    const res = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullFormData),
    });

    if (!res.ok) {
      alert("error");
    }

    const result = await res.json();
    if (!result.success) {
      alert(result.message);
    }
    console.log(result);

    console.log(fullFormData);
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
          <p className="text-red-500">رقم الهاتف غير صالح</p>
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
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}

{
  /* {phoneNumberError && (
          <span className="text-red-500 pr-4">رقم الهاتف غير صالح</span>
        )} */
}

{
  /* {successMessage && <p className="text-green-500">{successMessage}</p>}
{errorMessage && <p className="text-red-500">{errorMessage}</p>} */
}
