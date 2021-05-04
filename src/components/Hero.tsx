const Hero: React.FC = () => {
  return (
    <div className="px-2 py-8 md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center flex-col-reverse sm:-mx-3  md:flex-row">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 mt-20 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:mx-auto lg:pr-0 md:pb-0">
              <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-xl md:text-xl lg:text-xl xl:text-xl">
                <span className="block">
                  PODはポッドキャストの購読や端末内の音楽を再生することができるアプリです。
                </span>
                <span className="block text-indigo-600">
                  お気に入りの音楽やポッドキャストを見つけて楽しみましょう！
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"></p>
              <div className="flex w-full justify-center md:justify-start lg:pb-0 fade-in">
                <a
                  href="https://play.google.com/store/apps/details?id=com.musicapp.pod&hl=ja&gl=JP"
                  className="flex items-center px-6 py-3 mb-3 rounded-md"
                >
                  <img src="playstore.svg" className="h-12 bounce-top-icons" />
                </a>
                <a
                  href="https://apps.apple.com/jp/app/pod/id1559338636"
                  className="flex items-center px-6 py-3 mb-3 rounded-md "
                >
                  <img
                    src="appstore.svg"
                    className="h-12 pr-4 bounce-top-icons"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl">
              <img className="mx-auto" src="animation_300.gif" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
