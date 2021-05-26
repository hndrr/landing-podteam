import React from "react";
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
    const faqAnswer = (faq.answer || "").split(/(\n)/).map((item, index) => {
      return <>{item.match(/\n/) ? <br /> : item}</>;
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
          {/* <div>
            {faqs
              .filter((faq) => faq.length > 4)
              .map((faq) => (
                <>
                  <h3 className="mt-10 mb-3 font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p>
                    {faq.link && (
                      <a
                        href={faq.link.href}
                        className="text-indigo-600 font-bold underline"
                      >
                        {faq.link.text}
                      </a>
                    )}
                    {faq.answer}
                  </p>
                </>
              ))}
          </div> */}
          {/* <h3 className="mt-10 mb-3 font-semibold text-gray-900">
              PODとはどんなアプリですか
            </h3>
            <p>
              Podcastと音楽を再生することができるアプリです。
              <br />
              ※音楽再生は現在Android版のみ対応
              <br />
              Podcast購読についてはログインIDが共通であればiOS/Androidで共有されます。
              将来的にはタッチホイールでのシークや倍速再生、同時再生などの機能実現を目指しています。
            </p>
            <h3 className="mt-10 mb-3 font-semibold text-gray-900">
              お金はかかりますか
            </h3>
            <p>
              現在は非営利で制作しているため、無料で利用できます。
              ユーザー数が増えた場合、無料での運営が難しくなるため
              サブスクリプションや広告対応が入る可能性があります。
            </p>
            <h3 className="mt-10 mb-3 font-semibold text-gray-900">
              利用方法はどうなっていますか
            </h3>
            <p>
              まずメールアドレスまたはgoogleアカウント（iOS版ではApple
              IDも可能）で登録をお願いします。
              <br />
              その後、目的のポッドキャストを検索して購読する流れとなります。
              またandroid版では本体に入っている音楽再生をすることができます。
            </p>
            <h3 className="mt-10 mb-3 font-semibold text-gray-900">
              iOS版とandroid版の違いはなんですか
            </h3>
            <p>
              Podcast購読機能は共通ですが、Android側ではローカルの音楽を取り込んで再生する機能があります。
              開発が落ち着き次第、iOS側も対応予定です。
            </p>
          </div>
          <div>
            <h3 className="mt-10 mb-3 font-semibold text-gray-900">
              開発はどのように行われていますか
            </h3>
            <p>
              Flutter大学のコミュニティ内で開発が行われています。
              <br />
              Google製のFlutterというクロスプラットフォーム開発フレームワークで作られています。
              ログイン機能、ポッドキャスト購読などはFirebaseを利用しています。
              <br />
              基本的にiOS/androidを1つのコードで作成されていますが、
              音楽再生については共通で実装が行えるライブラリがないためAndroid先行で対応中です。
            </p>
            <h3 className="mt-10 mb-3 font-semibold text-gray-900">
              PODを紹介したいのですが、連絡はどうすればよいですか
            </h3>
            <p>
              このページへのリンクをお貼りください。
              その際、お問い合わせやメールでご連絡いただけると大変嬉しいです。
            </p>
            <h3 className="mt-10 mb-3 font-semibold text-gray-900">
              PODの開発に参加したい場合はどうすればよいですか
            </h3>
            <p>
              Flutter大学のコミュニティ内で開発されているため、Flutter大学へ入会する必要があります。
              入会後slackに招待されますので、その中の{" "}
              <span className="text-indigo-600 font-bold">
                #共同開発_music channel
              </span>
              でお声がけください。
            </p>
            <h3 className="mt-10 mb-3 font-semibold text-gray-900">
              バグ報告や改善要望があります。
            </h3>
            <p>
              <a
                href="https://docs.google.com/forms/d/1T0lbgXf5TArjAgMSSyaXNijW3JZ3wvLEJEV3ADhfEBc/viewform?usp=sf_link"
                className="text-indigo-600 font-bold underline"
              >
                お問い合わせ・不具合報告
              </a>
              までお願いします。
            </p> */}
        </div>
      </div>
    </section>
  );
};

export default Faq;
