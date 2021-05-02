import Card from "./Card";

type Props = {
  numbers: any;
};

const Cards: React.FC<Props> = (props) => {
  const numbers = props.numbers;
  const cardlists = numbers.map((number) => <Card key={number.toString()} />);
  return <div className="flex flex-wrap">{cardlists}</div>;
};

export default Cards;
