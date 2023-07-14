import "@/styles/globals.css";
import DefaultLayout from "@/Layouts/defaultlayout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
