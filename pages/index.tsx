import Head from "next/head";
import Faucet from "../components/Faucet";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kafirchain Faucet</title>
        <meta name="description" content="$hETH Faucet" />
        <meta name="viewport" content="width=device-width, initial-scale=0.1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Faucet />
      </main>
    </>
  );
}
