import React from "react";

export default function CheckoutButton() {
  return (
    <div className="flex justify-end">
      <button
        type="submit"
        className="bg-yellow px-12 py-2 rounded-xl text-white mt-4"
      >
        Checkout
      </button>
    </div>
  );
}
