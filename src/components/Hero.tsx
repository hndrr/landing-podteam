import React from "react";
import Lottie from "lottie-react-web";
import animation from "../../public/assets/logoAnimation.json";

interface HeroImgIcon {
  src: { url: string; height: number; width: number };
  href: string;
  alt: string;
}

type Props = {
  hero: { desc: string; desc2: string; imgs: HeroImgIcon[] };
};

const Hero: React.FC<Props> = ({ hero }) => {
  const HeroImgIcon = hero.imgs.map((img: HeroImgIcon, index) => (
    <a
      key={"HeroImg$index"}
      href={img.href}
      className="flex items-center mx-6 my-3 mb-3 rounded-md"
    >
      <img src={img.src.url} className="h-12 bounce-top-icons" alt={img.alt} />
    </a>
  ));

  return (
    <div className="px-2 py-8 md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center justify-between flex-col-reverse sm:-mx-3 md:flex-row">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 mt-4  space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:mx-auto lg:pr-0 md:pb-0 md:mt-20">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                <span className="block">{hero.desc}</span>
                <span className="block text-indigo-600">{hero.desc2}</span>
              </h1>
              <div className="flex w-full justify-around md:justify-start lg:pb-0 fade-in">
                {HeroImgIcon}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 lg:mt-20 flex justify-center md:justify-end">
            <div className="w-full max-w-md md:max-w-xs h-auto mx-auto rounded-full shadow-2xl bg-gradient-to-b from-transparent to-indigo-600">
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
