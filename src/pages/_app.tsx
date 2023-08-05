import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import SeoConfig from "../../next-seo.config";
import theme from "@/styles/customTheme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo {...SeoConfig} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
