import "@/styles/globals.css"
import { AppProvider } from "@/contexts/AppContext";
import { Sora, Raleway } from 'next/font/google';
import type { AppProps } from "next/app";
import SmoothScrolling from "@/components/SmoothScrolling";

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return(
  <AppProvider>
    <SmoothScrolling>
    <div className={raleway.className}>
      <Component {...pageProps} />
    </div>
    </SmoothScrolling>
  </AppProvider>
  )
}
