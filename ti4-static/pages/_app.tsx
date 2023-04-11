import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key="title">Twilight Assembly</title>
        <meta
          key="description"
          name="description"
          content="Tools to help play TI4 by"
        />
        <link rel="icon" href="/favicon.ico" key="icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
