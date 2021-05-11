import React from "react";
import { androidSrc, iosSrc } from "../array/app_src";
import AppImage from "./AppImage";
import Slider from "./Slider";

const AppImages: React.FC = () => {
  const AndroidImagelist = androidSrc.map((cardImage, index) => (
    <AppImage key={index} cardImage={cardImage} />
  ));
  const iOSImagelist = iosSrc.map((cardImage, index) => (
    <AppImage key={index} cardImage={cardImage} />
  ));

  return (
    <>
      <section id="android" className="py-20 -mx-4">
        <div className=" max-w-6xl mx-auto text-center lg:px-0">
          <h2 className="text-5xl font-bold tracking-tight text-center text-gray-900">
            Android App
          </h2>
          {/* <div className="grid gap-8 mt-6 grid-cols-2 lg:grid-cols-4">
            {AndroidImagelist}
          </div> */}
          <div className="mt-6">
            <Slider imageList={androidSrc} />
          </div>
        </div>
      </section>
      <section id="ios" className="py-20 -mx-4">
        <div className="max-w-6xl mx-auto text-center lg:px-0">
          <h2 className="text-5xl font-bold tracking-tight text-center text-gray-900">
            iOS App
          </h2>
          {/* <div className="grid gap-8 mt-6 grid-cols-2 lg:grid-cols-4">
            {iOSImagelist}
          </div> */}
          <div className="mt-6">
            <Slider imageList={iosSrc} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AppImages;
