"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

type Field = { id: string; label: string; type?: string; required?: boolean; textarea?: boolean; options?: string[] };

const fields: Field[] = [
  { id: "name", label: "Your name", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "phone", label: "Phone", type: "tel" },
  { id: "referrer", label: "Who introduced you?" },
  { id: "interest", label: "Of interest", options: ["Membership enquiry", "Villas & Estates", "Yachts & Aviation", "Motorcars", "Restaurants & Cellars", "Clubs & Members' Rooms", "Bespoke experience", "Press & partnerships"] },
  { id: "message", label: "A short note", textarea: true, required: true },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  };

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 text-center"
          role="status"
          aria-live="polite"
        >
          <p className="text-gold text-5xl mb-6">✦</p>
          <h3 className="font-serif text-3xl mb-4">Your note has been received.</h3>
          <p className="body-lg max-w-md mx-auto">
            A director will write back to you, by name, within the day. The House appreciates your patience and your discretion.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-7"
          noValidate
        >
          {fields.map((f) => (
            <div key={f.id} className="group">
              <label
                htmlFor={f.id}
                className="block font-sans text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-2"
              >
                {f.label}{f.required && <span aria-hidden className="text-gold ml-1">*</span>}
                {f.required && <span className="sr-only">(required)</span>}
              </label>
              {f.options ? (
                <select
                  id={f.id}
                  name={f.id}
                  required={f.required}
                  defaultValue=""
                  className="w-full bg-transparent border-b border-pearl hover:border-noir/40 focus:border-gold pb-3 font-sans text-base text-noir outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-noir">— select —</option>
                  {f.options.map((o) => (
                    <option key={o} value={o} className="bg-noir text-noir">{o}</option>
                  ))}
                </select>
              ) : f.textarea ? (
                <textarea
                  id={f.id}
                  name={f.id}
                  required={f.required}
                  rows={4}
                  className="w-full bg-transparent border-b border-pearl hover:border-noir/40 focus:border-gold pb-3 font-sans text-base text-noir placeholder:text-noir/30 outline-none transition-colors resize-none"
                  placeholder="A few sentences. Discretion is a given."
                />
              ) : (
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type || "text"}
                  required={f.required}
                  className="w-full bg-transparent border-b border-pearl hover:border-noir/40 focus:border-gold pb-3 font-sans text-base text-noir placeholder:text-noir/30 outline-none transition-colors"
                  placeholder=""
                  autoComplete={f.id === "email" ? "email" : f.id === "phone" ? "tel" : f.id === "name" ? "name" : "off"}
                />
              )}
            </div>
          ))}

          <p className="font-sans text-xs text-noir/40 leading-relaxed pt-2">
            By writing, you understand that membership is considered case by case and that the House does not publish or share client information under any circumstance.
          </p>

          <div className="pt-2">
            <MagneticButton variant="gold">
              {loading ? "Sending…" : "Send introduction"}
            </MagneticButton>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
