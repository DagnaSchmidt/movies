import Head from "next/head";
import clientPromise from "../lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

//components
import BottomNav from "../components/navs/bottomNav/bottomNav";
import TopNav from "../components/navs/topNav/topNav";


type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await clientPromise;

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="container">
      <Head>
        <title>Movies4you</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <TopNav />
      </header>

      <main>

      </main>

      <footer>
        <BottomNav />
      </footer>
    </div>
  );
}
