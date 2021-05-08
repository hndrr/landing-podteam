import React from "react";
import IconGithub from "./svg/IconGithub";
import IconQiita from "./svg/IconQiita";
import IconTwitter from "./svg/IconTwitter";
import IconZenn from "./svg/IconZenn";
import IconYoutube from "./svg/IconYoutube";
import Author from "./Author";

const Authors: React.FC = () => {
  const authors = [
    {
      authorName: "Rにしおか",
      avatarUrl:
        "https://pbs.twimg.com/profile_images/1306340269034336262/Gua2ip5u_400x400.jpg",
      twitter: "R24oka",
      github: "RN24Nishioka",
      qiita: "RN24",
      role: "Engineer",
      text: "ログイン機能、機能改善、リリースなどを担当",
    },
    {
      authorName: "ポテセン",
      avatarUrl:
        "https://pbs.twimg.com/profile_images/1231486072309207040/HxEzaw0e_400x400.jpg",
      twitter: "forelgoog",
      github: "hideaki10",
      // zenn: "",
      // qiita: "",
      role: "Engineer",
      text: "podcast機能、環境構築などを担当",
    },
    {
      authorName: "とっく",
      avatarUrl: "https://avatars.githubusercontent.com/u/69064290?v=4",
      twitter: "tokkuu",
      github: "tokku5552",
      // zenn: "",
      qiita: "tokkun5552",
      role: "Engineer",
      text: "Android音楽再生機能、リファクタなどを担当",
    },
    {
      authorName: "コップ時計",
      avatarUrl:
        "https://pbs.twimg.com/profile_images/1369254753562103815/77AB6E8W_400x400.jpg",
      // twitter: "",
      github: "",
      // zenn: "",
      // qiita: "",
      role: "College student / Engineer",
      text: "ログイン機能、プライバシーポリシーなどを担当",
    },
    {
      authorName: "hndr",
      avatarUrl: "https://avatars.githubusercontent.com/u/53109993?v=4",
      twitter: "hndrr",
      github: "hndrr",
      zenn: "hndr",
      qiita: "hndr",
      role: "PM / UX Engineer",
      text: "要件定義、UI/UXデザイン・実装などを担当",
    },
    {
      authorName: "KBOYのFlutter大学",
      avatarUrl:
        "https://pbs.twimg.com/profile_images/1303007901649256448/FzV_BaS5_400x400.jpg",
      url: "https://kboyflutteruniv.com/",
      youtube: "UCReuARgZI-BFjioA8KBpjsw/",
      twitter: "kboyflutteruniv",
      zenn: "kboy/books/ca6a9c93fd23f3",
      qiita: "organizations/kboy_flutter_univ",
      role: "Engineer",
      text:
        "が運営するFlutterアプリ開発を学ぶオンラインコミュニティ内で開発されています",
    },
  ];

  const Authorlists = authors.map((author, index) => (
    <Author key={index} author={author} />
  ));

  return (
    <section id="member" className="py-20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold tracking-tight text-center">
          POD Team Members
        </h2>

        <div className="grid grid-cols-4 gap-12 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          {Authorlists}
          {/* <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 rounded-lg shadow-lg bg-gray-100">
            <a
              href="https://twitter.com/R24oka"
              className="w-20 h-20 overflow-hidden rounded-full"
            >
              <img
                src="https://pbs.twimg.com/profile_images/1306340269034336262/Gua2ip5u_400x400.jpg"
                className="object-cover w-full h-full"
              />
            </a>
            <h4 className="text-xl font-bold text-gray-900">Rにしおか</h4>
            <span className="inline-flex justify-center items-center space-x-5 sm:m-auto">
              <IconTwitter url={"R24oka"} />
              <IconGithub url={"RN24Nishioka"} />
              <IconQiita url={"RN24"} />
            </span>
            <p className="text-base text-center text-gray-700">Engineer</p>
            <p className="text-base text-center text-gray-700">
              ログイン機能、機能改善、リリースなどを担当
            </p>
          </div>
          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 rounded-lg shadow-lg bg-gray-100">
            <a
              className="w-20 h-20 overflow-hidden rounded-full border-2 border-gray-50"
              href="https://twitter.com/forelgoog"
            >
              <img
                src="https://pbs.twimg.com/profile_images/1231486072309207040/HxEzaw0e_400x400.jpg"
                className="object-cover w-full h-full"
              />
            </a>
            <h4 className="text-xl font-bold text-gray-900">ポテセン</h4>
            <span className="inline-flex justify-center items-center space-x-5 sm:m-auto">
              <IconTwitter url={"forelgoog"} />
              <IconGithub url={"hideaki10"} />
            </span>
            <p className="text-base text-center text-gray-700">Engineer</p>
            <p className="text-base text-center text-gray-700">
              podcast機能、環境構築などを担当
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 rounded-lg shadow-lg bg-gray-100">
            <a
              href="https://twitter.com/tokkuu"
              className="w-20 h-20 overflow-hidden rounded-full"
            >
              <img
                src="https://avatars.githubusercontent.com/u/69064290?v=4"
                className="object-cover w-full h-full"
              />
            </a>
            <h4 className="text-xl font-bold text-gray-900">とっく</h4>
            <span className="inline-flex justify-center items-center space-x-5 sm:m-auto">
              <IconTwitter url={"tokkuu"} />
              <IconGithub url={"tokku5552"} />
              <IconQiita url={"tokkun5552"} />
            </span>
            <p className="text-base text-center text-gray-700">Engineer</p>
            <p className="text-base text-center text-gray-700">
              Android音楽再生機能、リファクタなどを担当
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 rounded-lg shadow-lg bg-gray-100">
            <div className="w-20 h-20 overflow-hidden rounded-full">
              <img
                src="https://pbs.twimg.com/profile_images/1369254753562103815/77AB6E8W_400x400.jpg"
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900">コップ時計</h4>
            <span className="inline-flex justify-center items-center space-x-5 sm:m-auto">
              <IconGithub url={"#"} />
            </span>
            <p className="text-base text-center text-gray-700">
              College student / Engineer
            </p>
            <p className="text-base text-center text-gray-700">
              ログイン機能、プライバシーポリシーなどを担当
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 rounded-lg shadow-lg bg-gray-100">
            <a
              href="https://twitter.com/hndrr"
              className="w-20 h-20 overflow-hidden rounded-full"
            >
              <img
                src="https://avatars.githubusercontent.com/u/53109993?v=4"
                className="object-cover w-full h-full"
              />
            </a>
            <h4 className="text-xl font-bold text-gray-900">hndr</h4>
            <span className="inline-flex justify-center items-center space-x-5 sm:m-auto">
              <IconTwitter url={"hndrr"} />
              <IconGithub url={"hndrr"} />
              <IconZenn url={"hndr"} />
              <IconQiita url={"hndr"} />
            </span>
            <p className="text-base text-center text-gray-700">
              PM / UX Engineer
            </p>
            <p className="text-base text-center text-gray-700">
              要件定義、UI/UXデザイン・実装などを担当
            </p>
          </div> 
          <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden rounded-lg shadow-lg bg-gray-100">
            <a
              href="https://kboyflutteruniv.com/"
              className="w-20 h-20 overflow-hidden border-2 border-gray-50 rounded-full"
            >
              <img
                src="https://pbs.twimg.com/profile_images/1303007901649256448/FzV_BaS5_400x400.jpg"
                className="object-cover w-full h-full"
              />
            </a>
            <h4 className="text-xl font-bold text-gray-900">
              KBOYのFlutter大学
            </h4>
            <span className="inline-flex justify-center items-center space-x-5 sm:m-auto">
              <IconYoutube url={"UCReuARgZI-BFjioA8KBpjsw/"} />
              <IconTwitter url={"kboyflutteruniv"} />
              <IconZenn url={"kboy/books/ca6a9c93fd23f3"} />
              <IconQiita url={"organizations/kboy_flutter_univ"} />
            </span>
            <p className="text-base text-center text-gray-700">
              <a
                className="text-indigo-600"
                href="https://twitter.com/kboy_silvergym"
              >
                KBOY@kboy_silvergym
              </a>
              が運営するFlutterアプリ開発を学ぶオンラインコミュニティ内で開発されています
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Authors;
