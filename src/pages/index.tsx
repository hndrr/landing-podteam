import { NextComponentType, NextPageContext } from "next";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Cards from "../components/Cards";
import Authors from "../components/Authors";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

type Props = {
  className?: string;
  numbers?: number[];
};

const HomePage: NextComponentType<NextPageContext, {}, Props> = () => {
  const numbers = [1, 2, 3];
  return (
    <>
      <Header />
      <Hero />
      <Authors />
      <Features />
      <Faq />
      <Footer />
    </>
  );
};

const Anchor = styled.a`
  ${tw`font-mono text-sm hover:bg-blue-200`};
`;

export default HomePage;
