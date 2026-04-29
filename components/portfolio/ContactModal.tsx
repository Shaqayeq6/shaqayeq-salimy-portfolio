"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { ThemeConfig } from "@/lib/types";

type ContactModalProps = {
  contactOpen: boolean;
  setContactOpen: Dispatch<SetStateAction<boolean>>;
  currentTheme: ThemeConfig;
};

export default function ContactModal({
  contactOpen,
  setContactOpen,
  currentTheme,
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitState("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <AnimatePresence>
      {contactOpen && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setContactOpen(false)}
            className="fixed inset-0 z-[70] bg-black/40"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            style={{
              borderColor: currentTheme.border,
              background: currentTheme.background,
            }}
            className="fixed bottom-6 left-6 z-[80] w-[min(42rem,calc(100vw-3rem))] overflow-hidden rounded-[2rem] border shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
          >
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: `1px solid ${currentTheme.border}` }}
            >
              <div className="flex gap-5 text-sm">
                <button
                  type="button"
                  style={{ color: currentTheme.textMuted }}
                >
                  Quick Message
                </button>
                <button type="button">Contact</button>
              </div>

              <button
                type="button"
                onClick={() => setContactOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black/10 text-xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6 px-6 py-6">
              <div>
                <p className="max-w-2xl text-3xl font-light leading-tight">
                  Let’s talk about your project, collaboration, or opportunity.
                </p>
                
              </div>

              <div>
                <p
                  className="text-sm"
                  style={{ color: currentTheme.textMuted }}
                >
                  Email
                </p>
                <p className="mt-2 text-xl font-medium">shaqayeq.salimy@gmail.com</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }))
                    }
                    placeholder="Name"
                    style={{
                      borderColor: currentTheme.border,
                      color: currentTheme.text,
                    }}
                    className="rounded-2xl border bg-transparent px-4 py-3 outline-none"
                  />

                  <input
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                    placeholder="Email"
                    type="email"
                    style={{
                      borderColor: currentTheme.border,
                      color: currentTheme.text,
                    }}
                    className="rounded-2xl border bg-transparent px-4 py-3 outline-none"
                  />
                </div>

                <textarea
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: event.target.value,
                    }))
                  }
                  placeholder="Write your message here..."
                  rows={5}
                  style={{
                    borderColor: currentTheme.border,
                    color: currentTheme.text,
                  }}
                  className="w-full rounded-2xl border bg-transparent px-4 py-3 outline-none"
                />

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    style={{
                      background: currentTheme.accent,
                      color: currentTheme.accentText,
                    }}
                    className="rounded-full px-5 py-3 text-sm font-medium"
                  >
                    {submitState === "loading" ? "Sending..." : "Send Message"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactOpen(false)}
                    style={{
                      borderColor: currentTheme.border,
                      color: currentTheme.text,
                    }}
                    className="rounded-full border px-5 py-3 text-sm font-medium"
                  >
                    Close
                  </button>

                  {submitState === "success" && (
                    <p
                      className="text-sm"
                      style={{ color: currentTheme.textSoft }}
                    >
                      Message sent successfully.
                    </p>
                  )}

                  {submitState === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}