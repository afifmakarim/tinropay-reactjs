import React from "react";

export default function InputId({ data }) {
  console.log(data);
  return (
    <div className="first mt-8 relative">
      <h4 className="border-4 border-stroke font-bold rounded-full h-12 w-12 flex bg-yellow m-2 flex items-center justify-center text-white overflow-visible absolute left-4 -top-8">
        1
      </h4>
      <div className="border-4 border-stroke border-4 px-8 rounded-2xl py-4 flex flex-col items-center">
        <span className="text-sm font-medium text-white p-2">
          Input ID Pelanggan
        </span>
        <input
          type="id"
          name="id"
          className={`w-full mt-1 px-3 py-2 bg-white border shadow-sm border-stroke placeholder-slate outline-4 block w-full rounded-md sm:text-sm`}
          placeholder="Input ID Pelanggan . . ."
          disabled={data}
          required
        />
      </div>
    </div>
  );
}
