// src/app/actions.ts
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function sendEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "There was an error with your submission. Please check the fields and try again.",
    };
  }
  
  const { name, email, message } = validatedFields.data;

  // Here you would integrate with an email sending service like Nodemailer, Resend, or SendGrid.
  // For this example, we'll just log the data to the console.
  console.log("New message from contact form:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
