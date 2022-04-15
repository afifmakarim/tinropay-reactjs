import React from "react";
import Navigation from "../parts/Navigation";
import Invoice from "../components/Invoice";
import CheckoutButton from "../components/form-checkout/CheckoutButton";
import { useLocation } from "react-router-dom";

export default function CheckoutPage() {
  const location = useLocation();
  const data = location.state.data;
  console.log(location);
  return (
    <>
      <Navigation hideSearchBar="hidden" />
      <div className="body-wrapper sm:p-4 flex gap-4">
        <form
          className="basis-1/2 mt-8"
          action="https://mfs-dev.linkaja.com/checkout/payment"
          method="post"
        >
          <Invoice data={data} />
          <textarea name="message" defaultValue={data.pgpToken} hidden />
          <textarea name="refNum" defaultValue={data.refNum} hidden />
          <CheckoutButton />
        </form>
        <div className="basis-1/2">
          <img
            className="rounded-2xl mt-8"
            src={location.state.imageUrl}
            alt={location.state.imageUrl}
          />
        </div>
      </div>
    </>
  );
}
