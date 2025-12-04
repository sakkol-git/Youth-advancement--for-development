import { z } from "zod";

export const donationSchema = z.object({
  amount: z.number().min(1, "Amount must be at least $1"),
  customAmount: z.number().optional(),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().max(500, "Message must be less than 500 characters").optional(),
  isRecurring: z.boolean().default(false),
  frequency: z.enum(["monthly", "quarterly", "yearly"]).optional(),
  isAnonymous: z.boolean().default(false),
});

export type DonationFormData = z.infer<typeof donationSchema>;
