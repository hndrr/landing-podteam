import React from "react";
import H2 from "./H2";

interface Update {
  text: string;
}

const Faq: React.FC = () => {
  return (
    <section id="update" className="py-20">
      <div className="px-8 mx-auto max-w-4xl lg:px-16">
        <H2>Update</H2>
        <div className="grid grid-cols-1 gap-0 text-gray-700 md:gap-16">
          <ul className="mt-10">
            <li className="font-bold">
              バージョン <span className="num">1.2.1</span>
            </li>
            <li>
              Podcastの表示順が切り替えられない、レイアウトが崩れるなどの細かいバグを修正しました。
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
