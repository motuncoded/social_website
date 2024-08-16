import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import { poppins } from "../styles/fonts";
import { roboto_serif } from "../styles/fonts";
import { UserProvider } from "../contexts/UserContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <style jsx global>{`
          body {
            font-family: ${poppins.style.fontFamily};
          }
          h1,
          h2 {
            font-family: ${roboto_serif.style.fontFamily};
          }
        `}</style>
        <Navbar />
        <Component {...pageProps} />
      </UserProvider>
    </QueryClientProvider>
  );
}
