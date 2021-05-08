import React from "react";
import IconGithub from "./svg/IconGithub";
import IconQiita from "./svg/IconQiita";
import IconTwitter from "./svg/IconTwitter";
import IconYoutube from "./svg/IconYoutube";
import IconZenn from "./svg/IconZenn";

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

const Author: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 rounded-lg shadow-lg bg-gray-100">
      <a
        href={`https://twitter.com/${props.author.twitter}`}
        className="w-20 h-20 overflow-hidden rounded-full border-2 border-gray-50"
      >
        <img
          src={props.author.avatarUrl}
          className="object-cover w-full h-full"
        />
      </a>
      <h4 className="text-xl font-bold text-gray-900">
        {props.author.authorName}
      </h4>
      <span className="inline-flex justify-center items-center space-x-5 sm:m-auto">
        {props.author.youtube && <IconYoutube url={props.author.youtube} />}
        {props.author.twitter && <IconTwitter url={props.author.twitter} />}
        {props.author.github && <IconGithub url={props.author.github} />}
        {props.author.zenn && <IconZenn url={props.author.zenn} />}
        {props.author.qiita && <IconQiita url={props.author.qiita} />}
      </span>
      <p className="text-base text-center text-gray-700">{props.author.role}</p>
      <p className="text-base text-center text-gray-700">
        {props.author.authorName === "KBOYのFlutter大学" && (
          <a
            className="text-indigo-600"
            href="https://twitter.com/kboy_silvergym"
          >
            KBOY@kboy_silvergym
          </a>
        )}
        {props.author.text}
      </p>
    </div>
  );
};

export default Author;