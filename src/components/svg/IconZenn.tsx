type Props = {
  url: string;
};

const IconZenn: React.FC<Props> = (props) => {
  return (
    <a
      href={`https://zenn.dev/${props.url}`}
      className="text-gray-900 hover:text-gray-200"
    >
      <span className="sr-only">Zenn</span>
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Zenn</title>
        <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z" />
      </svg>
    </a>
  );
};

export default IconZenn;
