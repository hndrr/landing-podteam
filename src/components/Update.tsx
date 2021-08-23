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
            <li className="mb-4">
              <span className="font-bold">Version </span>
              <span className="font-bold num">1.3.0</span>
              <span className="ml-20 num">2021/8/22</span>
              <ul className="mt-2">
                <li className="list-disc ml-6 mb-2">
                  ログイン後、ドロワーにログイン中のメールアドレスが表示されるようになりました。
                </li>
                <li className="list-disc ml-6 mb-2">
                  登録済みポッドキャストのリストを逆順で表示できるようになりました。
                </li>
                <li className="list-disc ml-6 mb-2">
                  再生中のポッドキャストのエピソード、音楽アルバム曲を常に表示するステータスバーを追加しました。
                </li>
                <li className="list-disc ml-6 mb-2">
                  再生中の音楽、アルバムリスト、ポッドキャストリストがハイライトされるようになりました。
                </li>
                <li className="list-disc ml-6 mb-2">
                  ログイン、サインアップ時のバグなどを修正しました。
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <span className="font-bold">Version </span>
              <span className="font-bold num">1.2.1</span>
              <span className="ml-20 num">2021/6/24</span>
              <ul className="mt-2">
                <li className="list-disc ml-6 mb-2">
                  Podcastの表示順が切り替えられない、レイアウトが崩れるなどの細かいバグを修正しました。
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <span className="font-bold">Version </span>
              <span className="font-bold num">1.2.0</span>
              <span className="ml-20 num">2021/5/5</span>
              <ul className="mt-2">
                <li className="list-disc ml-6 mb-2">
                  ドロワー、 問い合わせフォーム追加
                </li>
                <li className="list-disc ml-6 mb-2">
                  ポッドキャスト登録のUI改善
                </li>
                <li className="list-disc ml-6 mb-2">
                  apple/googleログインの追加
                </li>
              </ul>
            </li>
            <li className="mb-4">
              <span className="font-bold">Version </span>
              <span className="font-bold num">1.1.0</span>
              <span className="ml-20 num">2021/4/6</span>
              <ul className="mt-2">
                <li className="list-disc ml-6 mb-2">いくつかのバグを修正。</li>
              </ul>
            </li>
            <li className="mb-4">
              <span className="font-bold">Version </span>
              <span className="font-bold num">1.0</span>
              <span className="ml-24 num">2021/3/27</span>
              <ul className="mt-2">
                <li className="list-disc ml-6 mb-2">リリース</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
