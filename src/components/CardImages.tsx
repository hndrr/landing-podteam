import React from "react";
import CardImage from "./CardImage";

const CardImages: React.FC = () => {
  const cardImageList = [0, 1, 2, 3, 4, 5];
  const CardImageList = cardImageList.map((cardImage, index) => (
    <CardImage key={index} />
  ));
  return (
    <section className="">
      <div className=" max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Leadership</h2>
        <div className="grid gap-8 mt-6 md:grid-cols-2 lg:grid-cols-6">
          {CardImageList}
          {/* <div classNameName="p-8">
                <div classNameName="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
                  <div
                    classNameName="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
                    // style="background-image: url('')"
                  ></div>
                  <p classNameName="font-bold text-lg text-white absolute z-20 pointer-events-none">
                    Video Graphics
                  </p>
                  <img src="" alt="" />
                </div>
              </div> */}
        </div>
      </div>
    </section>
  );
};

export default CardImages;
