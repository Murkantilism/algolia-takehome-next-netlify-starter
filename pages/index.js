import Head from "next/head";
import Footer from "@components/Footer";
import React from "react";
import ReactDOM from "react-dom";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);
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
