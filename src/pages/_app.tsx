import { GlobalStyles } from 'twin.macro';
import '../../styles/globals.scss';
import './styles.scss';

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default MyApp;
