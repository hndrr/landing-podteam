import React from "react";
import AppImage from "./AppImage";

const AppImages: React.FC = () => {
  const cardImageList = [0, 1, 2, 3, 4, 5];
  const CardImageList = cardImageList.map((cardImage, index) => (
    <AppImage key={index} />
  ));
  return (
    <section className="">
      <div className=" max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold tracking-tight text-center">
          Android App
        </h2>
        <div className="grid gap-8 mt-6 md:grid-cols-2 lg:grid-cols-6">
          {CardImageList}
        </div>
        <h2 className="text-5xl font-bold tracking-tight text-center">
          iOS App
        </h2>
        <div className="grid gap-8 mt-6 md:grid-cols-2 lg:grid-cols-6">
          {CardImageList}
        </div>
      </div>
    </section>
  );
};

export default AppImages;
