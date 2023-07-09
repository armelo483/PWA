import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import { useEffect } from "react";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
