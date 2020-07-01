import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import SearchResult from "./SearchResult";
import MortgageCalculator from "./MortgageCalculator";
import styles from "../styles/Page.module.css";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import "antd/dist/antd.css";

function Page() {
  const searchResult = useSelector((state) => state.searchResult);
  const { totalCount } = searchResult;

  return (
    <div className={styles.container}>
      <Head>
        <title>Malaysia properties for sale | iProperty.com.my</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <Header />

      <main>
        <SearchBar />
        <div className="subBodyWrapper">
          <div className="searchResultsWrapper">
            <SearchResult />
            <Pagination pageStart="1" pageEnd="20" totalRecords={totalCount} />
            <MortgageCalculator />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Page;
