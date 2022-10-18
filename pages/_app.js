import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store from "../app/store";
import "../public/styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <Layout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </Provider>
  );
}

export default MyApp;
