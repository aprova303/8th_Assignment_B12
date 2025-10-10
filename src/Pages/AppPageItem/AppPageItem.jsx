import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import App from "../App/App";

const AppPageItem = ({ data }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [searchLoading, setSearchLoading] = useState(false);

  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  useEffect(() => {
    setSearchLoading(true);
    const timer = setTimeout(() => {
      const term = search.trim().toLowerCase();
      const searchResult = term
        ? data.filter((app) => app.title.toLowerCase().includes(term))
        : data;
      setFilteredData(searchResult);
      setSearchLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, data]);

  return (
    <div className="p-5">
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold p-6">Our All Applications</h1>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className="flex justify-between m-5">
        <h1 className="font-bold text-lg">({filteredData.length}) Apps Found</h1>
        <label className="input flex items-center gap-2 border px-3 rounded-lg">
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
            placeholder="Search Apps"
            className="outline-none"
          />
        </label>
      </div>

      {isPageLoading && (
        <div className="flex justify-center items-center h-60">
          <ClipLoader size={60} />
        </div>
      )}
      {!isPageLoading && searchLoading && (
        <div className="flex justify-center items-center h-60">
          <ClipLoader size={50} color="#4f46e5" />
        </div>
      )}

      {!isPageLoading && !searchLoading && (
        filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {filteredData.map((singleApp) => (
              <App key={singleApp.id} singleApp={singleApp} />
            ))}
          </div>
        ) : (
          <div className="text-center m-20">
            <h2 className="text-5xl font-semibold mb-4">No App Found</h2>
          </div>
        )
      )}
    </div>
  );
};

export default AppPageItem;
