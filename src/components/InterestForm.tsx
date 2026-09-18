"use client";

import Link from "next/link";
import { useState } from "react";
import { interestForm } from "@/content/site";

const live = interestForm.action.length > 0;

export default function InterestForm() {
  const [sent, setSent] = useState(false);

  if (!live) {
    return (
      <div className="box border-l-2 border-l-gold bg-gold/8 p-6">
        <p className="rail text-ink/70">Form not switched on</p>
        <h3 className="mt-2 text-[1.4rem]">There is nowhere to send this yet</h3>
        <p className="mt-3 max-w-[52ch] text-[14.5px] leading-[1.68] text-ink/82">
          The form is built and waiting on two things: the address sign-ups should land in, and the
          address confirmations go out from. Until both exist there is nowhere safe to put your
          details, and collecting them anyway would be worse than saying so.
        </p>
        <Link
          href="/progress/"
          className="mt-4 inline-block border-b border-navy/40 pb-0.5 text-[14.5px] text-navy hover:border-navy"
        >
          Org Comm has both →
        </Link>
      </div>
    );
  }

  return (
    <form
      action={interestForm.action}
      method="post"
      target="hidden-sink"
      onSubmit={() => setTimeout(() => setSent(true), 300)}
      className="box max-w-md p-6"
    >
      <div className="space-y-4">
        {[
          ["Your name", interestForm.nameField, "text", true],
          ["Email", interestForm.emailField, "email", true],
          ["University or institution", interestForm.instField, "text", false],
        ].map(([label, name, type, req]) => (
          <label key={label as string} className="block">
            <span className="rail text-ink/70">{label as string}</span>
            <input
              required={req as boolean}
              type={type as string}
              name={name as string}
              className="mt-1.5 w-full border border-ink/30 bg-transparent px-3 py-2 text-[15px] focus:border-navy"
            />
          </label>
        ))}
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-navy px-6 py-2.5 text-[14.5px] text-cream transition-colors duration-150 hover:bg-ink"
      >
        Tell me when registration opens
      </button>
      <p aria-live="polite" className="mt-3 text-[14px] text-navy">
        {sent ? "Got it. You will hear from us the day it opens." : ""}
      </p>
      <iframe title="hidden" name="hidden-sink" className="hidden" />
    </form>
  );
}
