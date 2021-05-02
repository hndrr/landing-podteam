const Card: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src="eliasson.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2 hover:bg-blue">
          Olafur Eliasson
        </div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-2 py-4">
        <span className="inline-block bg-gray-200 hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #art
        </span>
        <span className="inline-block bg-gray-200 hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #contemporary
        </span>
        <span className="inline-block bg-gray-200 hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #photography
        </span>
      </div>
    </div>
  );
};

export default Card;
