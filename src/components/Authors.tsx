import React from "react";
import Author from "./Author";

type Props = {
  author: {
    authorName: string;
    avatar: { url: string; height: number; width: number };
    youtube?: string;
    twitter?: string;
    github?: string;
    zenn?: string;
    qiita?: string;
    role: string;
    text: string;
  };
};

interface StaticIndexProps {
  authors: Props["author"][];
}

const Authors = ({ authors }) => {
  const Authorlists = authors.authors.map(
    (author: Props["author"], index: React.Key) => (
      <Author key={index} author={author} />
    )
  );

  return (
    <section id="member" className="py-20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold tracking-tight text-center text-gray-900">
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
