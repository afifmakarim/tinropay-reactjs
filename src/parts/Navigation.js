import React from "react";
import SearchBar from "../components/searchbar/SearchBar";
import { useSelector } from "react-redux";

export default function Navigation({ data, hideSearchBar }) {
  const { products } = useSelector((state) => state.pageData);
  return (
    <div className="navbar-wrapper bg-red w-full sm:p-2 ">
      <div className="navbar flex justify-around py-2 h-14 sm:flex-col">
        <div className="logo sm:flex sm:justify-center">
          <h1 className="text-lg font-bold text-white">
            <a href={`/`}>TinroPay</a>
          </h1>
        </div>
        <SearchBar
          placeholder="Search Voucher..."
          data={products}
          isHidden={hideSearchBar}
        />
        {/* <div className={`searchbar flex ${hideSearchBar}`}>
          <input
            className="border-2 px-4 border-gray focus:outline-none rounded-bl-2xl rounded-tl-2xl border-r-0 text-sm w-80"
            id="searchbar"
            placeholder="Search games"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="button h-7 w-7 border-2 border-gray p-1 rounded-2xl overflow-visible -ml-4 bg-white text-gray"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );
}
