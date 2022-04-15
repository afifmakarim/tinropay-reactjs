import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../config/api";

export default function Example() {
  const content = useSelector((state) => state);
  const dispatch = useDispatch();

  function getData() {
    return (dispatch) => {
      api.get("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        dispatch({
          type: "FETCH_DATA",
          data: res.data,
        })
      );
    };
  }

  useEffect(() => {
    dispatch(getData());
    console.log(content);
  }, []);
  
  return (
    <div className="App">
      {content.data && (
        <ul>
          <li>{content.data.id}</li>
          <li>{content.data.title}</li>
        </ul>
      )}
    </div>
  );
  // <div className="wrapper flex">
  //   <form className="checkout basis-1/2">
  //     <div className="first mt-8 relative">
  //       <h4 class="border-4 border-stroke font-bold rounded-full h-12 w-12 flex bg-yellow m-2 flex items-center justify-center text-white overflow-visible absolute left-4 -top-8">
  //         1
  //       </h4>
  //       <div className="border-4 border-stroke border-4 px-8 rounded-2xl py-4 flex flex-col items-center">
  //         <span class="text-sm font-medium text-white p-2">
  //           Input ID Pelanggan
  //         </span>
  //         <input
  //           type="id"
  //           name="id"
  //           class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-stroke placeholder-slate focus:outline-none focus:border-stroke focus:ring-stroke block w-full rounded-md sm:text-sm focus:ring-1"
  //           placeholder="Input ID Pelanggan . . ."
  //         />
  //       </div>
  //     </div>
  //     <div className="second mt-8 relative">
  //       <h4 class="border-4 border-stroke font-bold rounded-full h-12 w-12 flex bg-yellow m-2 flex items-center justify-center text-white overflow-visible absolute left-4 -top-8">
  //         2
  //       </h4>
  //       <div className="border-4 border-stroke border-4 px-8 rounded-2xl py-4 flex flex-col">
  //         <span class="text-sm font-medium text-white flex justify-center p-2">
  //           Pilih Denom
  //         </span>
  //         <div className="denom-list grid grid-cols-4 gap-2 sm:grid-cols-2 sm:gap-2">
  //           <div className="denom-card">
  //             <input
  //               type="radio"
  //               name="denom"
  //               id="denom"
  //               class="card-input-element checked:bg-stroke hidden"
  //             />
  //             <label
  //               for="denom"
  //               class="bg-white rounded-2xl border-2 border-stroke border-4 p-2 flex justify-center cursor-pointer"
  //             >
  //               125 GC
  //             </label>
  //           </div>
  //           <div className="denom-card">
  //             <input
  //               type="radio"
  //               name="denom"
  //               id="denom2"
  //               class="card-input-element checked:bg-stroke hidden"
  //             />
  //             <label
  //               for="denom2"
  //               class="bg-white rounded-2xl border-2 border-stroke border-4 p-2 flex justify-center cursor-pointer"
  //             >
  //               125 GC
  //             </label>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="third mt-8 relative">
  //       <h4 class="border-4 border-stroke font-bold rounded-full h-12 w-12 flex bg-yellow m-2 flex items-center justify-center text-white overflow-visible absolute left-4 -top-8">
  //         3
  //       </h4>
  //       <div className="border-4 border-stroke border-4 px-8 rounded-2xl py-4 flex flex-col">
  //         <span class="text-sm font-medium text-white flex justify-center p-2">
  //           Pilih Metode Pembayaran
  //         </span>
  //         <div className="payment-method-list flex flex-col gap-2">
  //           <div className="card-payment-method">
  //             <input
  //               type="radio"
  //               name="linkaja"
  //               id="linkaja"
  //               class="card-input-element hidden"
  //             />
  //             <label
  //               className="bg-white rounded-2xl border-2 border-stroke border-4 p-4 flex justify-between cursor-pointer"
  //               for="linkaja"
  //             >
  //               <span className="font-bold text-red">LinkAja</span>
  //               <span>Rp. 10.000</span>
  //             </label>
  //           </div>
  //           <div className="card-payment-method">
  //             <input
  //               type="radio"
  //               name="linkaja"
  //               id="cash"
  //               class="card-input-element hidden"
  //             />
  //             <label
  //               className="bg-white rounded-2xl border-2 border-stroke border-4 p-4 flex justify-between cursor-pointer checked:border-yellow"
  //               for="cash"
  //             >
  //               <span className="font-bold text-red">Gopay</span>
  //               <span>Rp. 10.000</span>
  //             </label>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="fourth mt-8 relative">
  //       <h4 class="border-4 border-stroke font-bold rounded-full h-12 w-12 flex bg-yellow m-2 flex items-center justify-center text-white overflow-visible absolute left-4 -top-8">
  //         4
  //       </h4>
  //       <div className="input-id border-4 border-stroke border-4 px-8 rounded-2xl py-4 flex flex-col items-center">
  //         <span class="text-sm font-medium text-white p-2">Input Email</span>
  //         <input
  //           type="id"
  //           name="id"
  //           class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-stroke placeholder-slate focus:outline-none focus:border-stroke focus:ring-stroke block w-full rounded-md sm:text-sm focus:ring-1"
  //           placeholder="Input Email . . ."
  //         />
  //       </div>
  //     </div>
  //     <div className="flex justify-end">
  //       <button className="bg-yellow px-12 py-2 rounded-xl text-white mt-4">
  //         Checkout
  //       </button>
  //     </div>
  //   </form>
  // </div>

  //   function Invoice() {
  //     let { invoiceId } = useParams();
  //     let invoice = useFakeFetch(`/api/invoices/${invoiceId}`);
  //     return invoice ? (
  //       <div>
  //         <h1>{invoice.customerName}</h1>
  //       </div>
  //     ) : (
  //       <Loading />
  //     );
  //   }
}
