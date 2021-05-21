import React from "react";
import { androidSrc, iosSrc } from "../array/app_src";
import Slider from "./Slider";

const AppImages: React.FC = () => {
  return (
    <>
      <section id="android" className="py-20 -mx-4">
        <div className=" max-w-6xl mx-auto text-center lg:px-0">
          <h2 className="text-5xl font-bold tracking-tight text-center text-gray-900">
            Android App
          </h2>
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
          <div className="mt-6">
            <Slider imageList={iosSrc} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AppImages;
