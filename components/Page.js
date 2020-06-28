import Head from "next/head";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import MortgageCalculator from "./MortgageCalculator";
import styles from "../styles/Page.module.css";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import "antd/dist/antd.css";

function Page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

          <link rel="stylesheet" type="text/css" charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
          <link rel="stylesheet" type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      </Head>

      <Header />

      <main>
        <SearchBar />
        <div className="subBodyWrapper">
          <div className="searchResultsWrapper">
            <SearchResult />
            <Pagination
                pageStart='1'
                pageEnd='20'
                totalProperties='210939'
            />
            <MortgageCalculator />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Page;
