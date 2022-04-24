import Head from "next/head";
import Footer from "@components/Footer";
import React from "react";
import ReactDOM from "react-dom";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  InfiniteHits
} from "react-instantsearch-dom";
import CustomHit from "../components/Hit";

const ALGOLIA_APP_ID = "QP39CFZYBC";
const ALGOLIA_PUBLIC_KEY = "38ca11446f95b3a3ce5d4c19ad57e52a";
const ALGOLIA_INDEX = "netlify_085ff13f-3a74-438b-bd6f-c9295ec4a37d_main_all";
const ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY;
console.log("ALGOLIA_ADMIN_API_KEY: ", ALGOLIA_ADMIN_API_KEY);
const searchClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_ADMIN_API_KEY ? ALGOLIA_ADMIN_API_KEY : ALGOLIA_PUBLIC_KEY
);
export const algoliaIndexApi = searchClient.initIndex(ALGOLIA_INDEX);

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Front-End Software Engineer Hiring Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          Get started by searching for a restaurant:
        </p>
        <InstantSearch
          indexName="netlify_085ff13f-3a74-438b-bd6f-c9295ec4a37d_main_all"
          searchClient={searchClient}
        >
          <SearchBox />
          <InfiniteHits hitComponent={CustomHit} className="hit-list" />
        </InstantSearch>
      </main>
      <Footer />
    </div>
  );
}
