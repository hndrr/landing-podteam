import React from "react";
import AppImage from "./AppImage";

const AppImages: React.FC = () => {
  const cardImageList = [0, 1, 2, 3];
  const CardImageList = cardImageList.map((cardImage, index) => (
    <AppImage key={index} />
  ));
  return (
    <>
      <section className="py-10">
        <div id="android" className=" max-w-6xl mx-auto text-center sm:px-8">
          <h2 className="text-5xl font-bold tracking-tight text-center">
            Android App
          </h2>
          <div className="grid gap-8 mt-6 grid-cols-2 lg:grid-cols-4">
            {CardImageList}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div id="ios" className=" max-w-6xl mx-auto text-center sm:px-8">
          <h2 className="text-5xl font-bold tracking-tight text-center">
            iOS App
          </h2>
          <div className="grid gap-8 mt-6 grid-cols-2 lg:grid-cols-4">
            {CardImageList}
          </div>
        </div>
      </section>
    </>
  );
};

export default AppImages;
