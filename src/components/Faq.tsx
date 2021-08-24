import React, { Fragment } from "react";
import H2 from "./H2";

interface Faq {
  length: number;
  question: string;
  answer: string;
  link: { text: string; href: string };
}
interface Faqs {
  faqs: Faq[];
  contact: { text: string; href: string };
}

const Faq: React.FC<Faqs> = ({ faqs, contact }) => {
  const FaqList = (faq: Faq, index: number) => {
    const channel = "#共同開発_music";
    const faqAnswer = (faq.answer || "")
      .split(/(\n|\s|channel|\d{1,})/)
      .map((item, index) => {
        return (
          <Fragment key={"faqAnsweritem$index"}>
            {item.match(/\n/) ? (
              <br />
            ) : item.match(channel) ? (
              <span className="text-indigo-600 font-bold">{channel} </span>
            ) : item.match(/\d{1,}/) ? (
              <span className="num">{item}</span>
            ) : (
              item
            )}
          </Fragment>
        );
      });

    return (
      <>
        <h3 className="mt-10 mb-3 font-semibold text-gray-900">
          {faq.question}
        </h3>
        <p>
          {index === 7 && (
            <a
              href={contact.href}
              className="text-indigo-600 font-bold underline"
            >
              {contact.text}
            </a>
          )}
          {faqAnswer}
        </p>
      </>
    );
  };

  return (
    <section id="faq" className="py-20">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        <H2>Frequently Asked Questions</H2>
        <div className="grid grid-cols-1 gap-0 text-gray-700 md:grid-cols-2 md:gap-16">
          <div>
            {faqs.map((faq, index) => index < 4 && FaqList(faq, index))}
          </div>
          <div>
            {faqs.map((faq, index) => index >= 4 && FaqList(faq, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
