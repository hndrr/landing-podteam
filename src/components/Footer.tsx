import React from "react";
import IconTwitter from "./svg/IconTwitter";
import IconGithub from "./svg/IconGithub";
import IconPlayStore from "./svg/IconPlaystore";
import IconAppStore from "./svg/IconAppstore";
import H2 from "./H2";

const Footer = ({ contact }) => {
  return (
    <section id="contact" className="body-font text-gray-700">
      <H2>Contact</H2>
      <div className="mt-10 text-center">
        <a href={contact.href} className="text-indigo-600 font-bold underline">
          {contact.text}
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
          © <span className="num">2021</span> POD Team.
        </p>
        <span className="inline-flex justify-center items-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <IconPlayStore url={"com.musicapp.pod"} />
          <IconAppStore url={"app/pod/id1559338636"} />
          <IconTwitter url={"podteam2525"} />
          <IconGithub url={"hndrr/landing-podteam"} />
        </span>
      </div>
    </section>
  );
};

export default Footer;
