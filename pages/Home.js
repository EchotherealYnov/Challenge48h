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

<Row title="Basket" fetchUrl={requests.fetchTrending} />

<Row title="Foot" fetchUrl={requests.fetchTopRated} />

<Row title="Tennis" fetchUrl={requests.fetchActionMovies} />

<Row title="Boxe" fetchUrl={requests.fetchComedyMovies} />

<Row title="Athlétisme  " fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
};

export default Home;
