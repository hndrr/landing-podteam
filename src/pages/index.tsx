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
import { client } from "../libs/client";
// import { useCallback, useRef } from "react";

type Props = {
  className?: string;
  numbers?: number[];
};

const HomePage = ({ hero, authors, faqs, contact }) => {
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
      <Hero hero={hero} />
      <AppImages />
      <Authors authors={authors} />
      {/* {JSON.stringify(data.contents)} */}
      <Faq faqs={faqs} contact={contact} />
      <Footer contact={contact} />
    </>
  );
};

const Anchor = styled.a`
  ${tw`font-mono text-sm hover:bg-blue-200`}
`;

export const getStaticProps = async () => {
  // const key = {
  //   headers: { "X-API-KEY": process.env.API_KEY },
  // };
  // const data = await fetch("https://podteam.microcms.io/api/v1/contents", key)
  //   .then((res) => res.json())
  //   .catch(() => null);

  const data: {
    contents: { hero: any; authors: any; faq: any; contact: any }[];
  } = await client.get({
    endpoint: "contents",
  });

  return {
    props: {
      hero: data.contents[0].hero,
      authors: data.contents[0].authors,
      faqs: data.contents[0].faq,
      contact: data.contents[0].contact,
    },
  };
};

export default HomePage;
