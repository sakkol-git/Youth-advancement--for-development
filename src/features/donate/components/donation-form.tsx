"use client";

import { motion } from "framer-motion";
import { Heart, Check } from "lucide-react";
import { Button, Input, Textarea, Card, CardContent, CardHeader, CardTitle, Separator } from "@/components/ui";
import { useDonationForm } from "../hooks/use-donation-form";
import { AmountSelector } from "./amount-selector";
import { cn } from "@/lib/utils";

export function DonationForm() {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    updateField,
    submit,
    reset,
  } = useDonationForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit();
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
          <Check className="h-12 w-12 text-primary" />
        </div>
        <h2 className="font-heading text-3xl font-bold mb-4">Thank You!</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Your generous donation will help transform the lives of young Cambodians.
          We&apos;ve sent a confirmation to your email.
        </p>
        <Button onClick={reset} variant="outline">
          Make Another Donation
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Select Amount
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AmountSelector
            value={formData.amount || 50}
            onChange={(value) => updateField("amount", value)}
            error={errors.amount}
          />

          <Separator className="my-6" />

          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isRecurring}
                onChange={(e) => updateField("isRecurring", e.target.checked)}
                className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
              />
              <span className="font-medium">Make this a recurring donation</span>
            </label>

            {formData.isRecurring && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="ml-8 space-y-2"
              >
                {(["monthly", "quarterly", "yearly"] as const).map((freq) => (
                  <label key={freq} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="frequency"
                      value={freq}
                      checked={formData.frequency === freq}
                      onChange={() => updateField("frequency", freq)}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="capitalize">{freq}</span>
                  </label>
                ))}
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">First Name *</label>
              <Input
                value={formData.firstName || ""}
                onChange={(e) => updateField("firstName", e.target.value)}
                placeholder="John"
                className={cn(errors.firstName && "border-destructive")}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name *</label>
              <Input
                value={formData.lastName || ""}
                onChange={(e) => updateField("lastName", e.target.value)}
                placeholder="Doe"
                className={cn(errors.lastName && "border-destructive")}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address *</label>
            <Input
              type="email"
              value={formData.email || ""}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="john@example.com"
              className={cn(errors.email && "border-destructive")}
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
            <Input
              type="tel"
              value={formData.phone || ""}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="+855 99 123 456"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message (Optional)</label>
            <Textarea
              value={formData.message || ""}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Share why you're supporting YAD..."
              rows={4}
              className={cn(errors.message && "border-destructive")}
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">{errors.message}</p>
            )}
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isAnonymous}
              onChange={(e) => updateField("isAnonymous", e.target.checked)}
              className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
            />
            <span className="text-sm">Make my donation anonymous</span>
          </label>
        </CardContent>
      </Card>

      {errors.submit && (
        <p className="text-sm text-destructive text-center">{errors.submit}</p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full text-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Processing..."
        ) : (
          <>
            Donate ${formData.amount || 50}
            {formData.isRecurring && formData.frequency && ` / ${formData.frequency}`}
          </>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Your donation is secure and encrypted. YAD is a registered non-profit organization.
      </p>
    </form>
  );
}
