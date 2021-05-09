const CardImage: React.FC = () => {
  return (
    <div>
      <img
        className="object-cover object-center w-full h-128 rounded-md shadow"
        src="https://images.unsplash.com/photo-1614030126544-b79b92e29e98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
      {/* <h3 className="mt-2 font-medium text-gray-700">John Doe</h3>
      <p className="text-sm text-gray-600">CEO</p> */}
    </div>
  );
};

export default CardImage;
