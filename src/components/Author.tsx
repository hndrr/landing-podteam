import React from "react";
import { useMediaQuery } from "react-responsive";
import IconGithub from "./svg/IconGithub";
import IconInstgaram from "./svg/IconInstagram";
import IconQiita from "./svg/IconQiita";
import IconTwitter from "./svg/IconTwitter";
import IconWeb from "./svg/IconWeb";
import IconYoutube from "./svg/IconYoutube";
import IconZenn from "./svg/IconZenn";

type Props = {
  author: {
    authorName: string;
    avatarUrl: { url: string; height: number; width: number };
    website?: string;
    youtube?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
    zenn?: string;
    qiita?: string;
    role: string;
    text: string;
    link: { text: string; href: string };
  };
};

const Author: React.FC<Props> = ({ author }) => {
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="flex flex-col items-center justify-between col-span-4 px-8 py-8 space-y-3 rounded-lg shadow-lg bg-gray-100">
      <a
        href={
          author.website
            ? `https://${author.website}`
            : author.twitter
            ? `https://twitter.com/${author.twitter}`
            : "#"
        }
        className="w-20 h-20 overflow-hidden rounded-full border-2 border-gray-50"
      >
        <img
          src={author.avatarUrl.url}
          className="object-cover w-full h-full"
          alt={author.authorName}
        />
      </a>
      <h3 className="text-xl font-bold text-gray-900">{author.authorName}</h3>
      <span className="inline-flex justify-center items-center space-x-5 sm:m-auto overflow-y-hidden">
        {author.website && <IconWeb url={author.website} />}
        {author.youtube && <IconYoutube url={author.youtube} />}
        {author.twitter && <IconTwitter url={author.twitter} />}
        {author.instagram && <IconInstgaram url={author.instagram} />}
        {author.github && <IconGithub url={author.github} />}
        {author.zenn && <IconZenn url={author.zenn} />}
        {(isMd || !author.website) && !author.instagram && author.qiita && (
          <IconQiita url={author.qiita} />
        )}
      </span>
      {(author.instagram || (!isMd && author.website)) && author.qiita && (
        <span className="inline-flex justify-center items-center h-6 overflow-y-hidden">
          <IconQiita url={author.qiita} />
        </span>
      )}
      <p className="text-base text-center text-gray-700">{author.role}</p>
      <p className="text-base text-center text-gray-700">
        {author.link && (
          <a className="text-indigo-600" href={author.link.href}>
            {author.link.text}
          </a>
        )}
        {author.text}
      </p>
    </div>
  );
};

export default Author;
