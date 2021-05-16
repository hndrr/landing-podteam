import React from "react";
import { NextComponentType, NextPageContext } from "next";
import styled from "@emotion/styled";
import tw from "twin.macro";
import CommonMeta from "../components/CommonMeta";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Authors from "../components/Authors";
import Footer from "../components/Footer";
import AppImages from "../components/AppImages";
import Faq from "../components/Faq";
// import { useCallback, useRef } from "react";

type Props = {
  className?: string;
  numbers?: number[];
};

const HomePage: NextComponentType<NextPageContext, {}, Props> = () => {
  // const numbers = [1, 2, 3];
  // const refContents = useRef<HTMLDivElement>();

  // const scrollToContents = useCallback(() => {
  //   refContents.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // }, [refContents]);

  return (
    <>
      <CommonMeta
        title={"POD team"}
        description={"POD team"}
        keyword={"POD podcast music app"}
        image={"https://podteam.vercel.app/assets/ogp.png"}
        url={"https://podteam.vercel.app/"}
      />
      <Header />
      <Hero />
      <AppImages />
      <Authors />
      <Faq />
      <Footer />
    </>
  );
};

const Anchor = styled.a`
  ${tw`font-mono text-sm hover:bg-blue-200`}
`;

export default HomePage;
