import React from "react";
import { androidSrc, iosSrc } from "../array/app_src";
import AppImage from "./AppImage";
// import Slider from "./slider";

const AppImages: React.FC = () => {
  const AndroidImagelist = androidSrc.map((cardImage, index) => (
    <AppImage key={index} cardImage={cardImage} />
  ));
  const iOSImagelist = iosSrc.map((cardImage, index) => (
    <AppImage key={index} cardImage={cardImage} />
  ));

  return (
    <>
      <section className="py-20">
        <div
          id="android"
          className=" max-w-6xl mx-auto text-center px-8 lg:px-0"
        >
          <h2 className="text-5xl font-bold tracking-tight text-center">
            Android App
          </h2>
          <div className="grid gap-8 mt-6 grid-cols-2 lg:grid-cols-4">
            {/* <Slider imageList={androidSrc} /> */}
            {AndroidImagelist}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div id="ios" className=" max-w-6xl mx-auto text-center px-8 lg:px-0">
          <h2 className="text-5xl font-bold tracking-tight text-center">
            iOS App
          </h2>
          <div className="grid gap-8 mt-6 grid-cols-2 lg:grid-cols-4">
            {/* <Slider imageList={iosSrc} /> */}
            {iOSImagelist}
          </div>
        </div>
      </section>
    </>
  );
};

export default AppImages;
