import "@fontsource/montserrat";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>Space Football</title>
        <meta name="description" content="Space Football, but on Earth" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex-1">
        <nav className="mb-12 shadow bg-sky-500 text-white">
          <Link href="/" className="shadow flex items-center p-4">
            <Image
              src="/logo.svg"
              className="mr-2"
              width="40"
              height="40"
              alt="logo"
            />

            <h1 className="text-5xl uppercase font-bold tracking-wider">
              Space Football
            </h1>
          </Link>

          <div className="pl-2 py-1 flex bg-sky-800">
            <Link href="/" className="uppercase p-2 text-sky-100">Home</Link>
            <Link href="/chart" className="uppercase p-2 text-sky-100">Chart</Link>
            <Link href="/globe" className="uppercase p-2 text-sky-100">Globe</Link>
          </div>
        </nav>

        <Component {...pageProps} />
      </main>

      <footer className="border-t border-neutral-200 text-neutral-700 flex-2 text-center p-4">
        made by artur - 2022
      </footer>
    </div>
  );
}
