import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("@popperjs/core");
    import("bootstrap/dist/js/bootstrap" as any);
  }, []);
  return <Component {...pageProps} />;
}

if (typeof window !== "undefined") {
  AOS.init({ duration: 500 });
}
