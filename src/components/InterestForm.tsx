"use client";

import { useState } from "react";
import { interestForm } from "@/content/site";

const live = interestForm.action.length > 0;

export default function InterestForm() {
  const [sent, setSent] = useState(false);

  if (!live) {
    return (
      <div className="ticks border border-ink/20 bg-cream/60 p-8">
        <p className="display text-[1.5rem] text-navy">This form is not switched on yet</p>
        <p className="mt-4 max-w-[52ch] text-[1.02rem] font-light leading-relaxed text-ink/75">
          The page is built and waiting. It needs one thing from the organising committee: the
          address the sign-ups should land in, and the email address confirmations go out from.
          Until then there is nowhere for your details to go, and collecting them without somewhere
          safe to put them would be worse than saying so.
        </p>
        <p className="mt-4 text-[15px] font-light text-ink/60">
          Follow our announcements in the meantime — registration will not open without notice.
        </p>
      </div>
    );
  }

  return (
    <form
      action={interestForm.action}
      method="post"
      target="hidden-sink"
      onSubmit={() => setTimeout(() => setSent(true), 300)}
      className="max-w-md"
    >
      <div className="space-y-5">
        <label className="block">
          <span className="text-[15px] font-light text-ink/65">Your name</span>
          <input
            required
            name={interestForm.nameField}
            className="mt-1.5 w-full border border-ink/25 bg-transparent px-4 py-3 text-[1.05rem] focus:border-navy"
          />
        </label>
        <label className="block">
          <span className="text-[15px] font-light text-ink/65">Email</span>
          <input
            required
            type="email"
            name={interestForm.emailField}
            className="mt-1.5 w-full border border-ink/25 bg-transparent px-4 py-3 text-[1.05rem] focus:border-navy"
          />
        </label>
        <label className="block">
          <span className="text-[15px] font-light text-ink/65">University or institution</span>
          <input
            name={interestForm.instField}
            className="mt-1.5 w-full border border-ink/25 bg-transparent px-4 py-3 text-[1.05rem] focus:border-navy"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-7 w-full bg-navy px-8 py-3.5 text-[16px] text-cream transition-colors hover:bg-ink"
      >
        Tell me when registration opens
      </button>

      <p aria-live="polite" className="mt-4 text-[15px] font-light text-navy">
        {sent ? "Got it. You will hear from us the day it opens." : ""}
      </p>

      <iframe title="hidden" name="hidden-sink" className="hidden" />
    </form>
  );
}
