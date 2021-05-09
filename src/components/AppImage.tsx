type Props = {
  cardImage: {
    name: string;
    src: string;
  };
};

const AppImage: React.FC<Props> = (props) => {
  return (
    <>
      <img
        className="object-cover object-center w-full h-128 rounded-md shadow"
        src={`assets/${props.cardImage.src}`}
        alt={props.cardImage.name}
      />
      {/* <h3 className="mt-2 font-medium text-gray-700">John Doe</h3>
      <p className="text-sm text-gray-600">CEO</p> */}
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
    </>
  );
};

export default AppImage;
