import "../styles/globals.css";
import { AppContext, AppContextProvider } from "../store/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
