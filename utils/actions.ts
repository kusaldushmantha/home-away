'use server'

import { profileSchema } from "@/utils/schemas";

export const createProfileAction = async (prevState: unknown, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    console.debug(validatedFields);
    return { message: 'Profile created' }
  } catch (err) {
    console.error(err);
    return { message: 'Error creating profile' }
  }
}