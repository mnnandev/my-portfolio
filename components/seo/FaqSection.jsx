import { faqItems } from "@/lib/faq";

export default function FaqSection() {
  return (
    <section className="seo-faq" id="faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="seo-faq__title">
        Frequently asked questions
      </h2>
      <dl className="seo-faq__list">
        {faqItems.map((item) => (
          <div key={item.question} className="seo-faq__item">
            <dt>{item.question}</dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
