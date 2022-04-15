import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";
export default function InputDenom({ data, handleInputChange, isLoading }) {
  // const [denom, setDenom] = useState();
  // useEffect(() => {
  //   setDenom(data);
  // }, []);
  // if (isLoading) return <Loader />;
  return (
    <div className="second mt-8 relative">
      <h4 className="border-4 border-stroke font-bold rounded-full h-12 w-12 flex bg-yellow m-2 flex items-center justify-center text-white overflow-visible absolute left-4 -top-8">
        2
      </h4>
      <div className="border-4 border-stroke border-4 px-8 rounded-2xl py-4 flex flex-col">
        <span className="text-sm font-medium text-white flex justify-center p-2">
          Pilih Denom
        </span>

        <div className="denom-list grid grid-cols-4 gap-2 sm:grid-cols-2 sm:gap-2 w-full">
          {data.map((item, index) => {
            return (
              <div key={index} className="denom-card">
                <input
                  type="radio"
                  name="amount"
                  id={`denom-${index}`}
                  className="card-input-element checked:bg-stroke hidden"
                  value={item.amount}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor={`denom-${index}`}
                  className="bg-white rounded-2xl border-2 border-stroke border-4 p-4 items-center flex justify-center cursor-pointer"
                >
                  {item.denomName}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
