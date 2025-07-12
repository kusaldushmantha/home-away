import * as z from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, "Min 2 characters").max(30, "Max 30 characters"),
  lastName: z.string().min(2, "Min 2 characters").max(30, "Max 30 characters"),
  username: z.string().min(5, "Min 5 characters").max(12, "Max 30 characters"),
})