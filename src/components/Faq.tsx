const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-20">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        <h2 className="text-5xl font-bold tracking-tight text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
          <div>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              PODとはどういったアプリですか
            </h5>
            <p>
              Tails is a drag and drop page builder built on Top of TailwindCSS.
              You can drop components to create a page that you can export.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              お金はかかりますか
            </h5>
            <p>
              Absolutely, you can try out tails for free; however, if you wish
              to access all the components and export the page you'll need to
              upgrade your account.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              利用方法はどうなっていますか
            </h5>
            <p>
              You can upgrade your account by visiting{" "}
              <a
                href="https://devdojo.com/pro"
                className="text-indigo-500 underline"
              >
                The Pro Upgrade Page
              </a>
              . You will also gain access to many other applications and
              sections of the site.
              <a
                href="https://help.hellonext.co/faq/startup-eligibility/"
                target="_blank"
              >
                here
              </a>
              .
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              iOS版とandroid版の違いはなんですか
            </h5>
            <p>
              You will have unlimited access to all your pre-built pages;
              however, if you want to be able to download and export your pages,
              you'll need a pro account.
              <a href="https://paddle.com" target="_blank">
                Paddle
              </a>{" "}
              for processing payments.
            </p>
          </div>
          <div>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              どのようにして開発が行われていますか
            </h5>
            <p>
              Implementation in your project is very simple. You can use the
              exported page as a starting point, or you can copy and paste the
              HTML into your own page.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              PODを紹介したいのですが連絡はどうすればよいですか
            </h5>
            <p>
              You have unlimited use to the templates used in Tails; however,
              you cannot re-use the templates to sell for others to use.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              PODの開発に参加したいのですがどうすればよいですか
            </h5>
            <p>
              Of course, you can feel free to cancel your account at anytime,
              and you can feel free to come back and upgrade again whenever
              you're ready.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              バグ報告や改善要望をおくりたいです
            </h5>
            <p>
              If you need assistance implementing the templates into your
              project you can contact support or you can visit our{" "}
              <a
                href="https://devdojo.com/questions"
                className="text-indigo-500 underline"
              >
                question section
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
