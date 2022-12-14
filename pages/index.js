import Head from "next/head";
import Header from "../components/Header";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>IP Address Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen ">
        <Header />
        <div id="map" className="h-[calc(100vh_-_15rem)] w-full  ">
          <Map />
        </div>
      </main>
    </div>
  );
}
