import FullLayout from '../components/layouts/FullLayout';
// import '../styles/globals.css';

// const MyApp = ({ children }) => {
function MyApp({ Component, pageProps }) {
  return (
    <>
      <FullLayout>
        <Component {...pageProps} />
      </FullLayout>
    </>
  );
}

export default MyApp;
