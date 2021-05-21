type Props = {
  cardImage: {
    name: string;
    src: string;
  };
};

const AppImage: React.FC<Props> = (props) => {
  return (
    <img
      className={`object-cover object-center w-full h-128 shadow cursor-pointer`}
      src={`assets/${props.cardImage.src}`}
      alt={props.cardImage.name}
    />
  );
};

export default AppImage;
