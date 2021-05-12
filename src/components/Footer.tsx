import React from "react";
import IconTwitter from "./svg/IconTwitter";
import IconGithub from "./svg/IconGithub";
import IconPlayStore from "./svg/IconPlaystore";
import IconAppStore from "./svg/IconAppstore";

const Footer: React.FC = () => {
  return (
    <section id="contact" className="body-font text-gray-700">
      <h2 className="text-5xl font-bold tracking-tight text-center text-gray-900">
        Contact
      </h2>
      <div className="mt-10 text-center">
        <a
          href="https://docs.google.com/forms/d/1T0lbgXf5TArjAgMSSyaXNijW3JZ3wvLEJEV3ADhfEBc/viewform?usp=sf_link"
          className="text-indigo-600 underline"
        >
          お問い合わせ・不具合報告
        </a>
      </div>
      <div className=" container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
        <a
          href="#_"
          className="text-xl font-black leading-none text-gray-900 select-none logo"
        >
          POD
        </a>
        <p className="mt-4 text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l sm:border-black sm:mt-0">
          © 2021 POD Team.
        </p>
        <span className="inline-flex justify-center items-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <IconPlayStore url={"com.musicapp.pod"} />
          <IconAppStore url={"app/pod/id1559338636"} />
          <IconTwitter url={"podteam2525"} />
          <IconGithub url={"#"} />
        </span>
      </div>
    </section>
  );
};

export default Footer;
