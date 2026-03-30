"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="divide-y divide-border">
      {items.map((faq, i) => (
        <div key={faq.q} className="group">
          <dt>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between py-7 text-left transition-colors"
              aria-expanded={openIndex === i}
            >
              <span className="pr-8 font-heading text-lg font-medium text-foreground sm:text-xl">
                {faq.q}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block text-2xl leading-none text-accent"
                >
                  +
                </motion.span>
              </span>
            </button>
          </dt>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.dd
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-7 leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </motion.dd>
            )}
          </AnimatePresence>
        </div>
      ))}
    </dl>
  );
}
