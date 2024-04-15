import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className="flex flex-col justify-center items-center">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
