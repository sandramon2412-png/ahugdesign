import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Mail, MessageCircle } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { submitContactMessage } from "@/server/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · A Hug Design" },
      {
        name: "description",
        content:
          "Get in touch with A Hug Design — collaborations, custom requests, press, or just to say hello.",
      },
      { property: "og:title", content: "Contact · A Hug Design" },
      { property: "og:description", content: "Send a note to the studio." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  const submit = useServerFn(submitContactMessage);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      subject: String(fd.get("subject") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? ""), // honeypot
    };

    // light client-side validation
    const e2: Record<string, string> = {};
    if (!data.name) e2.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) e2.email = "Please enter a valid email";
    if (data.message.length < 10) e2.message = "Message must be at least 10 characters";
    if (Object.keys(e2).length) {
      setErrors(e2);
      return;
    }

    setSubmitting(true);
    try {
      const res = await submit({ data });
      if (res.ok) {
        toast.success("Message sent — we'll be in touch soon ✨");
        form.reset();
      } else {
        toast.error(res.error ?? "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm font-light text-espresso outline-none transition-colors focus:border-sage";

  return (
    <>
      <section
        className="relative px-6 pb-16 pt-32 text-center md:px-12"
        style={{ background: "var(--linen)" }}
      >
        <div className="absolute inset-0 bg-botanical opacity-30" />
        <div className="relative mx-auto max-w-2xl">
          <p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--sage)" }}
          >
            Say Hello
          </p>
          <h1 className="mb-5 font-display" style={{ fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1 }}>
            Let's <em className="italic">talk</em>
          </h1>
          <p className="text-base font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            Collaborations, custom requests, press, or just to say hi — drop us a note and we'll write back soon.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.4fr]">
          {/* Side info */}
          <aside className="reveal flex flex-col gap-6">
            <div>
              <h2 className="mb-3 font-display text-2xl italic">Studio notes</h2>
              <p className="text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
                We're a small studio and we read every message ourselves. We typically reply within two business days.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="grid size-10 flex-none place-items-center rounded-full"
                style={{ background: "color-mix(in oklab, var(--sage) 18%, transparent)" }}
              >
                <Mail size={16} style={{ color: "var(--sage-dark)" }} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--sage)" }}>
                  Email
                </p>
                <p className="text-sm" style={{ color: "var(--espresso)" }}>
                  hello@ahugdesign.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="grid size-10 flex-none place-items-center rounded-full"
                style={{ background: "color-mix(in oklab, var(--terra) 18%, transparent)" }}
              >
                <MessageCircle size={16} style={{ color: "var(--terra-dark)" }} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--terra)" }}>
                  Etsy
                </p>
                <a
                  href="https://www.etsy.com/shop/AHugDesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline-offset-4 hover:underline"
                  style={{ color: "var(--espresso)" }}
                >
                  @AHugDesign
                </a>
              </div>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="reveal reveal-d2 rounded-3xl p-8 shadow-card md:p-10"
            style={{ background: "var(--cream-white)" }}
            noValidate
          >
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
              aria-hidden="true"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--sage-dark)" }}>
                  Name
                </label>
                <input name="name" maxLength={100} className={inputClass} required />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--sage-dark)" }}>
                  Email
                </label>
                <input name="email" type="email" maxLength={255} className={inputClass} required />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--sage-dark)" }}>
                Subject (optional)
              </label>
              <input name="subject" maxLength={200} className={inputClass} />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--sage-dark)" }}>
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                maxLength={2000}
                className={`${inputClass} resize-none`}
                required
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-soft transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              style={{ background: "var(--terra)" }}
            >
              {submitting ? "Sending..." : "Send message →"}
            </button>

            <p className="mt-4 text-center text-[11px]" style={{ color: "var(--umber)" }}>
              We never share your details. Replies usually within 48 hours.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
