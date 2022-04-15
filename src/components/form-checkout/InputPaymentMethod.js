import React from "react";
import AmountFormatter from "../../utils/AmountFormatter";

export default function InputPaymentMethod({
  data,
  formValue,
  handleInputChange,
}) {
  return (
    <div className="third mt-8 relative">
      <h4 className="border-4 border-stroke font-bold rounded-full h-12 w-12 flex bg-yellow m-2 flex items-center justify-center text-white overflow-visible absolute left-4 -top-8">
        3
      </h4>
      <div className="border-4 border-stroke border-4 px-8 rounded-2xl py-4 flex flex-col">
        <span className="text-sm font-medium text-white flex justify-center p-2">
          Pilih Metode Pembayaran
        </span>
        <div className="payment-method-list flex flex-col gap-2">
          {data.map((item, index) => {
            return (
              <div key={index} className="card-payment-method">
                <input
                  type="radio"
                  name="paymentMethod"
                  id={item.name}
                  className="card-input-element hidden"
                  value={item.id}
                  onChange={handleInputChange}
                />
                <label
                  className="bg-white rounded-2xl border-2 border-stroke border-4 p-4 flex justify-between cursor-pointer"
                  htmlFor={item.name}
                >
                  <span className="font-bold text-red">{item.name}</span>
                  <span>
                    {formValue.amount
                      ? AmountFormatter.format(formValue.amount)
                      : ""}
                  </span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
