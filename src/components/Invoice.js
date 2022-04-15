import React from "react";

export default function Invoice({ data, title }) {
  console.log(data);
  return (
    <>
      <div className="border-4 border-stroke border-4 px-8 rounded-2xl py-4 flex flex-col items-center divide-y-2">
        <span class="text-lg font-medium text-white p-2 ">
          {title || "Selesaikan Pembayaranmu"}
        </span>
        <table className="table-auto text-white font-light">
          <tbody>
            <tr>
              <td>Payment Method</td>
              <td className="pl-12">LinkAja</td>
            </tr>
            <tr>
              <td>TrxId</td>
              <td className="pl-12">{data.trxId}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td className="pl-12">{data.trxStatus}</td>
            </tr>
            <tr>
              <td className=" font-bold">Total</td>
              <td className=" pl-12 font-bold">{data.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
