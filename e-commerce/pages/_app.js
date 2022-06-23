import Header from '../components/layouts/Header/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <Header />
      <div
        style={{
          display: 'flex',
          width: '100%',
          // overflow: 'hidden',
          paddingTop: '70px',
          // padding: '10px',
        }}
      >
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
