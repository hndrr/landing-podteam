import { NextComponentType, NextPageContext } from 'next';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import H2Title from '../components/TitleStyled';
import Cards from '../components/Cards';

type Props = {
  className?: string;
  numbers?: number[];
};

const HomePage: NextComponentType<NextPageContext, {}, Props> = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <H2Title>
        <Anchor>HOME</Anchor>
      </H2Title>
      <Cards numbers={numbers} />
    </>
  );
};

const Anchor = styled.a`
  ${tw`font-mono text-sm hover:bg-blue-200`};
`;

export default HomePage;
