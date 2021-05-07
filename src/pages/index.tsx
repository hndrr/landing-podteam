import { NextComponentType, NextPageContext } from "next";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Header from "../components/Header";
import Nav from "../components/Nav";

import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Authors from "../components/Authors";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
// import { useCallback, useRef } from "react";

type Props = {
  className?: string;
  numbers?: number[];
};

const HomePage: NextComponentType<NextPageContext, {}, Props> = () => {
  const numbers = [1, 2, 3];
  // const refContents = useRef<HTMLDivElement>();

  // const scrollToContents = useCallback(() => {
  //   refContents.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // }, [refContents]);

  return (
    <>
      <Nav />
      <Header />
      <Hero />
      <Authors />
      <Faq />
      <Footer />
    </>
  );
};

const Anchor = styled.a`
  ${tw`font-mono text-sm hover:bg-blue-200`};
`;

export default HomePage;
