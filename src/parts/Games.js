/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";

export default function Games() {
  const { products } = useSelector((state) => state.pageData);
  const filterGames = products.filter((item) => item.category === "games");

  return (
    <div className="popular-section">
      <div className="my-6 w-32 drop-shadow-lg">
        <h2 className="tracking-wider	text-2xl text-white font-bold border-b-4 w-3/6 pb-2 border-yellow">
          GAMES
        </h2>
      </div>
      <div className="card-list grid grid-cols-4 gap-4 sm:grid-cols-2 sm:gap-2">
        {filterGames.map((item, index) => {
          return (
            <a
              key={index}
              href={`/detail/${item.slugName}`}
              className="card-item flex flex-col items-center rounded-2xl primary-shadow bg-maroon"
            >
              <img
                className="h-60 rounded-t-2xl w-full brightness-75 hover:filter-none transition delay-100"
                src={item.imageUrl}
                alt=""
              />
              <h1 className="card-title py-2 text-white">{item.productName}</h1>
            </a>
          );
        })}
      </div>
    </div>
  );
}
