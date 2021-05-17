import React from "react";
import Lottie from "lottie-react-web";
import animation from "../../public/assets/logoAnimation.json";

const Hero: React.FC = () => {
  return (
    <div className="px-2 py-8 md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center justify-between flex-col-reverse sm:-mx-3  md:flex-row">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 mt-4  space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:mx-auto lg:pr-0 md:pb-0 md:mt-20">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                <span className="block">
                  PODはポッドキャストの購読や端末内の音楽を再生することができるアプリです。
                </span>
                <span className="block text-indigo-600">
                  お気に入りの音楽やポッドキャストを見つけて楽しみましょう！
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"></p>
              <div className="flex w-full justify-around md:justify-start lg:pb-0 fade-in">
                <a
                  href="https://play.google.com/store/apps/details?id=com.musicapp.pod&hl=ja&gl=JP"
                  className="flex items-center px-6 py-3 mb-3 rounded-md"
                >
                  <img
                    src="/assets/playstore.svg"
                    className="h-12 bounce-top-icons"
                  />
                </a>
                <a
                  href="https://apps.apple.com/jp/app/pod/id1559338636"
                  className="flex items-center px-6 py-3 mb-3 rounded-md "
                >
                  <img
                    src="/assets/appstore.svg"
                    className="h-12 pr-4 bounce-top-icons"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-20 flex justify-center md:justify-end">
            <div className="w-full max-w-md md:max-w-xs h-auto mx-auto rounded-full shadow-2xl bg-gradient-to-b from-transparent to-indigo-600">
              {/* <img
                className="w-full rounded-lg mx-auto shadow-lg"
                src="/assets/animation_300.gif"
              /> */}
              <Lottie
                options={{
                  animationData: animation,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
