"use client";

import { useMemo, useState } from "react";
import { faqs, faqGroups } from "@/content/faq";

export default function FaqList() {
  const [q, setQ] = useState("");

  const hits = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return faqs;
    return faqs.filter(
      (f) => f.q.toLowerCase().includes(t) || f.a.toLowerCase().includes(t),
    );
  }, [q]);

  const groups = faqGroups
    .map((g) => ({ g, items: hits.filter((f) => f.group === g) }))
    .filter((x) => x.items.length > 0);

  return (
    <div>
      <label className="block">
        <span className="text-[15px] font-light text-ink/72">
          Type a word and the list narrows
        </span>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="visa, fee, judge, equity…"
          className="mt-2 w-full max-w-md border border-ink/25 bg-transparent px-4 py-3 text-[1.05rem] text-ink placeholder:text-ink/70 focus:border-navy"
        />
      </label>

      <p aria-live="polite" className="mt-3 text-[14px] font-light text-ink/68">
        {hits.length === faqs.length
          ? `${faqs.length} questions`
          : `${hits.length} of ${faqs.length} questions`}
      </p>

      {groups.length === 0 && (
        <p className="mt-10 text-[1.05rem] font-light text-ink/70">
          Nothing matches that. Try a shorter word, or ask us directly — the link is at the bottom
          of this page.
        </p>
      )}

      <div className="mt-10 space-y-14">
        {groups.map(({ g, items }) => (
          <section key={g}>
            <h2 className="display text-[1.7rem] text-navy">{g}</h2>
            <dl className="mt-5 border-t border-ink/15">
              {items.map((f) => (
                <div key={f.q} className="border-b border-ink/15 py-5">
                  <dt className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-[1.15rem] text-ink">{f.q}</span>
                    {f.pending && (
                      <span className="border border-navy/30 px-2 py-0.5 text-[12px] font-light text-navy/70">
                        not decided yet
                      </span>
                    )}
                  </dt>
                  <dd className="mt-2 max-w-[66ch] text-[1.02rem] font-light leading-[1.7] text-ink/78">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
