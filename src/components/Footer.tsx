import IconTwitter from "./svg/IconTwitter";
import IconGithub from "./svg/IconGithub";

type Props = {
  url: string;
};

const Footer: React.FC<Props> = (props) => {
  return (
    <section id="contact" className="text-gray-700 body-font">
      <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
        <a
          href="#_"
          className="text-xl font-black leading-none text-gray-900 select-none logo"
        >
          POD
        </a>
        <p className="mt-4 text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l sm:border-black sm:mt-0">
          © 2021 POD Team.
        </p>
        <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <IconTwitter url={"podteam2525"} />
          <IconGithub url={"#"} />
        </span>
      </div>
    </section>
  );
};

export default Footer;
