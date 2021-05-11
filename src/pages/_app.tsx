import { GlobalStyles } from "twin.macro";
import "../../styles/globals.scss";
import "./styles.scss";
import "swiper/swiper.scss";

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default MyApp;
