import React from "react";
import Author from "./Author";

interface Author {
  authorName: string;
  avatarUrl: { url: string; height: number; width: number };
  youtube?: string;
  twitter?: string;
  github?: string;
  zenn?: string;
  qiita?: string;
  role: string;
  text: string;
  link: { text: string; href: string };
}

interface Authors {
  authors: Author[];
}

const Authors: React.FC<Authors> = ({ authors }) => {
  const Authorlists = authors.map((author: Author, index: React.Key) => (
    <Author key={index} author={author} />
  ));

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
