import "@/styles/globals.css";
import type { AppProps } from "next/app";
import QueryClientProvider from "@/providers/query-client-provider";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider pageProps={...pageProps}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
