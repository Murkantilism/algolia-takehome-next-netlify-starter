import Head from "next/head";
import Footer from "@components/Footer";
import React from "react";
import ReactDOM from "react-dom";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
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
          <Hits />
        </InstantSearch>
      </main>
      <Footer />
    </div>
  );
}
