import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FullLayout from '../components/layouts/FullLayout';
import Head from 'next/head';

// import '../styles/globals.css';

// const MyApp = ({ children }) => {
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
      </Head>
      {/* <ThemeProvider> */}
      <FullLayout>
        <Component {...pageProps} />
      </FullLayout>
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;
