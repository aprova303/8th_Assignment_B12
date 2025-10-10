import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import App from "../App/App";

const AppPageItem = ({ data }) => {
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();

  const searchApp = term
    ? data.filter((app) => app.title.toLowerCase().includes(term))
    : data;

  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold p-6">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between m-5">
        <h1 className="font-bold text-lg">({searchApp.length}) Apps Found</h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>

      <Suspense fallback={<span>Loading.....</span>}>
        {searchApp.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {searchApp.map((singleApp) => (
              <App key={singleApp.id} singleApp={singleApp} />
            ))}
          </div>
        ) : (
          <div className="text-center m-50">
            <h2 className="text-5xl font-semibold mb-4">No App Found</h2>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default AppPageItem;
