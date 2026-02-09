"use client";

import { useState } from "react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
  billingPeriod: string;
}

function PaymentModal({
  isOpen,
  onClose,
  planName,
  price,
  billingPeriod,
}: PaymentModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const luhnCheck = (cardNumber: string) => {
    const digits = cardNumber.replace(/\s/g, "").split("").map(Number);
    let sum = 0;
    let isEven = false;

    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = digits[i];

      if (isEven) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  };

  const getCardType = (number: string) => {
    const cleaned = number.replace(/\s/g, "");
    if (/^4/.test(cleaned)) return "Visa";
    if (/^5[1-5]/.test(cleaned)) return "Mastercard";
    if (/^3[47]/.test(cleaned)) return "Amex";
    if (/^6(?:011|5)/.test(cleaned)) return "Discover";
    return "";
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(" ") : cleaned;
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const validateCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    if (cleaned.length === 0) return "Card number is required";
    if (cleaned.length < 13 || cleaned.length > 19)
      return "Invalid card number length";
    if (!/^\d+$/.test(cleaned)) return "Card number must contain only digits";
    if (!luhnCheck(cleaned)) return "Invalid card number";
    return "";
  };

  const validateExpiryDate = (value: string) => {
    if (!value) return "Expiry date is required";
    const [month, year] = value.split("/");
    if (!month || !year) return "Invalid format (MM/YY)";

    const monthNum = parseInt(month);
    const yearNum = parseInt("20" + year);

    if (monthNum < 1 || monthNum > 12) return "Invalid month";

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    if (
      yearNum < currentYear ||
      (yearNum === currentYear && monthNum < currentMonth)
    ) {
      return "Card has expired";
    }

    return "";
  };

  const validateCVV = (value: string) => {
    if (!value) return "CVV is required";
    if (!/^\d{3,4}$/.test(value)) return "CVV must be 3-4 digits";
    return "";
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;

    if (field === "cardNumber") {
      const cleaned = value.replace(/\s/g, "").replace(/\D/g, "");
      if (cleaned.length > 19) return;
      formattedValue = formatCardNumber(cleaned);

      const error = validateCardNumber(formattedValue);
      setErrors((prev) => ({ ...prev, cardNumber: error }));
    }

    if (field === "expiryDate") {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned.length > 4) return;
      formattedValue = formatExpiryDate(cleaned);

      if (formattedValue.length === 5) {
        const error = validateExpiryDate(formattedValue);
        setErrors((prev) => ({ ...prev, expiryDate: error }));
      } else {
        setErrors((prev) => ({ ...prev, expiryDate: "" }));
      }
    }

    if (field === "cvv") {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned.length > 4) return;
      formattedValue = cleaned;

      const error = validateCVV(formattedValue);
      setErrors((prev) => ({ ...prev, cvv: error }));
    }

    if (field === "cardName") {
      if (value && !/^[a-zA-Z\s]*$/.test(value)) return;
      if (!value) {
        setErrors((prev) => ({
          ...prev,
          cardName: "Cardholder name is required",
        }));
      } else {
        setErrors((prev) => ({ ...prev, cardName: "" }));
      }
    }

    if (field === "address") {
      if (!value) {
        setErrors((prev) => ({ ...prev, address: "Address is required" }));
      } else {
        setErrors((prev) => ({ ...prev, address: "" }));
      }
    }

    if (field === "city") {
      if (!value) {
        setErrors((prev) => ({ ...prev, city: "City is required" }));
      } else {
        setErrors((prev) => ({ ...prev, city: "" }));
      }
    }

    if (field === "zipCode") {
      if (!value) {
        setErrors((prev) => ({ ...prev, zipCode: "ZIP code is required" }));
      } else {
        setErrors((prev) => ({ ...prev, zipCode: "" }));
      }
    }

    if (field === "country") {
      if (!value) {
        setErrors((prev) => ({ ...prev, country: "Country is required" }));
      } else {
        setErrors((prev) => ({ ...prev, country: "" }));
      }
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      cardNumber: validateCardNumber(formData.cardNumber),
      cardName: formData.cardName ? "" : "Cardholder name is required",
      expiryDate: validateExpiryDate(formData.expiryDate),
      cvv: validateCVV(formData.cvv),
      address: formData.address ? "" : "Address is required",
      city: formData.city ? "" : "City is required",
      zipCode: formData.zipCode ? "" : "ZIP code is required",
      country: formData.country ? "" : "Country is required",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      setTimeout(() => {
        setIsSuccess(true);
      }, 500);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
      address: "",
      city: "",
      zipCode: "",
      country: "",
    });
    setErrors({
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
      address: "",
      city: "",
      zipCode: "",
      country: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>

      <div className="relative bg-white w-full max-w-135 max-h-[90vh] overflow-y-auto mx-4">
        <button
          onClick={handleClose}
          className="absolute top-6 cursor-pointer right-6 text-black hover:text-gray-600 transition-colors text-2xl font-light"
        >
          ×
        </button>

        {!isSuccess ? (
          <div className="p-12">
            <h2 className="font-bold text-[32px]/[40px] mb-2">
              Payment Details
            </h2>
            <div className="mb-8">
              <p className="text-[15px]/[25px] opacity-60">
                {planName} Plan - ${price} {billingPeriod}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block font-bold text-[12px] tracking-[2px] uppercase mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) =>
                      handleInputChange("cardNumber", e.target.value)
                    }
                    placeholder="1234 5678 9012 3456"
                    className="w-full h-10 px-4 border border-black text-[15px] focus:outline-none focus:border-gray-600"
                  />
                  {formData.cardNumber && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-bold">
                      {getCardType(formData.cardNumber)}
                    </span>
                  )}
                </div>
                {errors.cardNumber && (
                  <p className="text-red-600 text-[12px] mt-1">
                    {errors.cardNumber}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="block font-bold text-[12px] tracking-[2px] uppercase mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={formData.cardName}
                  onChange={(e) =>
                    handleInputChange("cardName", e.target.value)
                  }
                  placeholder="Nika Tavartkiladze"
                  className="w-full h-10 px-4 border border-black text-[15px] focus:outline-none focus:border-gray-600"
                />
                {errors.cardName && (
                  <p className="text-red-600 text-[12px] mt-1">
                    {errors.cardName}
                  </p>
                )}
              </div>

              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <label className="block font-bold text-[12px] tracking-[2px] uppercase mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={formData.expiryDate}
                    onChange={(e) =>
                      handleInputChange("expiryDate", e.target.value)
                    }
                    placeholder="MM/YY"
                    className="w-full h-10 px-4 border border-black text-[15px] focus:outline-none focus:border-gray-600"
                  />
                  {errors.expiryDate && (
                    <p className="text-red-600 text-[12px] mt-1">
                      {errors.expiryDate}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block font-bold text-[12px] tracking-[2px] uppercase mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange("cvv", e.target.value)}
                    placeholder="123"
                    className="w-full h-10 px-4 border border-black text-[15px] focus:outline-none focus:border-gray-600"
                  />
                  {errors.cvv && (
                    <p className="text-red-600 text-[12px] mt-1">
                      {errors.cvv}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-bold text-[12px] tracking-[2px] uppercase mb-2">
                  Billing Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="123 Main Street"
                  className="w-full h-10 px-4 border border-black text-[15px] focus:outline-none focus:border-gray-600"
                />
                {errors.address && (
                  <p className="text-red-600 text-[12px] mt-1">
                    {errors.address}
                  </p>
                )}
              </div>

              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <label className="block font-bold text-[12px] tracking-[2px] uppercase mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="New York"
                    className="w-full h-10 px-4 border border-black text-[15px] focus:outline-none focus:border-gray-600"
                  />
                  {errors.city && (
                    <p className="text-red-600 text-[12px] mt-1">
                      {errors.city}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block font-bold text-[12px] tracking-[2px] uppercase mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) =>
                      handleInputChange("zipCode", e.target.value)
                    }
                    placeholder="10001"
                    className="w-full h-10 px-4 border border-black text-[15px] focus:outline-none focus:border-gray-600"
                  />
                  {errors.zipCode && (
                    <p className="text-red-600 text-[12px] mt-1">
                      {errors.zipCode}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <label className="block font-bold text-[12px] tracking-[2px] uppercase mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  placeholder="United States"
                  className="w-full h-10 px-4 border border-black text-[15px] focus:outline-none focus:border-gray-600"
                />
                {errors.country && (
                  <p className="text-red-600 text-[12px] mt-1">
                    {errors.country}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full h-12 cursor-pointer bg-black text-white font-bold text-[12px] tracking-[2px] uppercase hover:bg-gray-800 transition-colors"
              >
                Complete Payment
              </button>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>

            <h2 className="font-bold text-[32px]/[40px] mb-4">
              Payment Successful!
            </h2>

            <div className="mb-8 text-[15px]/[25px] opacity-60">
              <p>Your {planName} plan has been activated.</p>
              <p className="mt-2">
                Amount charged: ${price} {billingPeriod}
              </p>
            </div>

            <button
              onClick={handleClose}
              className="w-full h-12 cursor-pointer bg-black text-white font-bold text-[12px] tracking-[2px] uppercase hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentModal;
