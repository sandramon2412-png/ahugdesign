import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  // honeypot — must remain empty
  website: z.string().max(0).optional().or(z.literal("")),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    // Reject bots that filled the honeypot
    if (data.website && data.website.length > 0) {
      return { ok: true as const };
    }

    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      subject: data.subject?.trim() ? data.subject : null,
      message: data.message,
    });

    if (error) {
      console.error("[contact] insert failed:", error);
      return { ok: false as const, error: "We couldn't send your message. Please try again." };
    }

    return { ok: true as const };
  });
