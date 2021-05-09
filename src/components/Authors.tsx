import React from "react";
import authors from "../array/authors";
import Author from "./Author";

type Props = {
  author: {
    authorName: string;
    avatarUrl: string;
    youtube?: string;
    twitter?: string;
    github?: string;
    zenn?: string;
    qiita?: string;
    role: string;
    text: string;
  };
};

const Authors: React.FC = () => {
  const Authorlists = authors.map((author, index: React.Key) => (
    <Author key={index} author={author} />
  ));

  return (
    <section id="member" className="py-10">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold tracking-tight text-center">
          POD Team Members
        </h2>
        <div className="grid grid-cols-4 gap-12 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          {Authorlists}
        </div>
      </div>
    </section>
  );
};

export default Authors;
