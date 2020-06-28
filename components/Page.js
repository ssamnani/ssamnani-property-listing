import Head from "next/head";
import React from "react";
// import { useDispatch } from 'react-redux'
// import useInterval from '../lib/useInterval'
import Header from "./Header";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import MortgageCalculator from "./MortgageCalculator";
import styles from "../styles/Page.module.css";
import SearchBar from "./SearchBar";
import "antd/dist/antd.css";
import Pagination from "./Pagination";

function Page() {
  // const dispatch = useDispatch()

  // // Tick the time every second
  // useInterval(() => {
  //     dispatch({
  //         type: 'TICK',
  //         light: true,
  //         lastUpdate: Date.now(),
  //     })
  // }, 1000)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main>
        <SearchBar />
        <div className="subBodyWrapper">
          <div className="searchResultsWrapper">
            <SearchResult />
            <Pagination pageStart="1" pageEnd="20" totalProperties="210939" />
            <MortgageCalculator />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Page;
