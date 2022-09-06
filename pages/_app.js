import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Background from '../components/Background';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
};

export default MyApp;
