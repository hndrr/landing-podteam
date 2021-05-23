type Props = {
  cardImage: {
    name: string;
    src: string;
  };
};

const AppImage: React.FC<Props> = ({ cardImage }) => {
  return (
    <img
      className={`object-cover object-center w-full h-128 shadow`}
      src={`assets/${cardImage.src}`}
      alt={cardImage.name}
    />
  );
};

export default AppImage;
