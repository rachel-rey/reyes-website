import type { AppProps } from "next/app";
import Navbar from "@/Components/navbar";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css"; // Import your global styles if you have any

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}