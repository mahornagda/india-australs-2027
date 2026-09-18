import Link from "next/link";
import { Page, Band } from "@/components/Section";
import FaqList from "@/components/FaqList";
import { faqs } from "@/content/faq";

export const metadata = { title: "Questions" };

const answered = faqs.filter((f) => !f.pending).length;

export default function Faq() {
  return (
    <>
      <Page
        eyebrow="Questions"
        title="What people ask us"
        lede={`${answered} of these ${faqs.length} questions have a real answer today. The rest are marked as undecided rather than filled with a guess, because you will plan flights around what we tell you.`}
      />
      <Band tone="paper">
        <FaqList />
        <div className="mt-16 border-t border-ink/15 pt-8">
          <p className="max-w-[54ch] text-[1.05rem] font-light leading-relaxed text-ink/75">
            If your question is not here, ask it. We will answer you directly, and if it comes up
            again we will add it to this page.
          </p>
          <Link
            href="/ask"
            className="mt-6 inline-block bg-navy px-7 py-3 text-[16px] text-cream transition-colors hover:bg-ink"
          >
            Ask us something
          </Link>
        </div>
      </Band>
    </>
  );
}
