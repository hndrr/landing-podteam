import React from "react";
import { androidSrc, iosSrc } from "../array/app_src";
import AppImage from "./AppImage";

const AppImages: React.FC = () => {
  const AndroidImagelist = androidSrc.map((cardImage, index) => (
    <AppImage key={index} cardImage={cardImage} />
  ));
  const iOSImagelist = iosSrc.map((cardImage, index) => (
    <AppImage key={index} cardImage={cardImage} />
  ));

  return (
    <>
      <section className="py-10">
        <div id="android" className=" max-w-6xl mx-auto text-center sm:px-8">
          <h2 className="text-5xl font-bold tracking-tight text-center">
            Android App
          </h2>
          <div className="grid gap-8 mt-6 grid-cols-2 lg:grid-cols-4">
            {AndroidImagelist}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div id="ios" className=" max-w-6xl mx-auto text-center sm:px-8">
          <h2 className="text-5xl font-bold tracking-tight text-center">
            iOS App
          </h2>
          <div className="grid gap-8 mt-6 grid-cols-2 lg:grid-cols-4">
            {iOSImagelist}
          </div>
        </div>
      </section>
    </>
  );
};

export default AppImages;