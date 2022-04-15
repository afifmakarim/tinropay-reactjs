import React, { useState } from "react";
import { SearchIcon, XCircleIcon } from "@heroicons/react/solid";

export default function SearchBar({ placeholder, data, isHidden }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.productName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className={`search ${isHidden ? isHidden : ""}`}>
      <div className="searchInputs flex">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          className="border-2 px-4 border-gray focus:outline-none rounded-bl-2xl rounded-tl-2xl border-r-0 text-sm w-80 flex sm:w-full"
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon className="h-7 w-7 border-2 border-gray p-1 rounded-2xl overflow-visible -ml-4 bg-white text-gray" />
          ) : (
            <XCircleIcon
              className="h-7 w-7 border-2 border-gray p-1 rounded-2xl overflow-visible -ml-4 bg-white text-gray cursor-pointer"
              id="clearBtn"
              onClick={clearInput}
            />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult flex flex-col divide-y mt-1 sm:mt-4">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem rounded-2xl bg-white px-4 py-2 hover:bg-gray z-40"
                href={`detail/${value.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <p>{value.productName} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
