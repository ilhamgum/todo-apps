import "../styles/globals.css";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import Layout from "@layout";
import { AnimatePresence } from "framer-motion";
import Transition from "@components/transition";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AnimatePresence mode="wait">
        <Transition key={router.route}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Transition>
      </AnimatePresence>
    </SessionProvider>
  );
}
