"use client";

import { useState, useCallback } from "react";
import { donationSchema, type DonationFormData } from "../schemas/donation.schema";

interface FormErrors {
  [key: string]: string;
}

export function useDonationForm() {
  const [formData, setFormData] = useState<Partial<DonationFormData>>({
    amount: 50,
    isRecurring: false,
    isAnonymous: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = useCallback(<K extends keyof DonationFormData>(
    field: K,
    value: DonationFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when field is updated
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [errors]);

  const validate = useCallback(() => {
    const result = donationSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  }, [formData]);

  const submit = useCallback(async () => {
    if (!validate()) return false;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      return true;
    } catch {
      setErrors({ submit: "Something went wrong. Please try again." });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [validate]);

  const reset = useCallback(() => {
    setFormData({
      amount: 50,
      isRecurring: false,
      isAnonymous: false,
    });
    setErrors({});
    setIsSuccess(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    updateField,
    validate,
    submit,
    reset,
  };
}
