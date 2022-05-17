import Head from "next/head";
import React from "react";
import requests from "../lib/requests";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Head>
        <title>Meet29</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Row
        title="Évenements à venir"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

     
    </div>
  );
};

export default Home;
