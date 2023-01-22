import type { AppProps } from "next/app";
import "@styles/global.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
