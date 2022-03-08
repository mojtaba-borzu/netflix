import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/landing/Landing";

import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  );
};

export default IndexPage;
