import React, { useState, useEffect } from "react";
import Navigation from "../parts/Navigation";
import Footer from "../parts/Footer";
import InputId from "../components/form-checkout/InputId";
import InputDenom from "../components/form-checkout/InputDenom";
import InputPaymentMethod from "../components/form-checkout/InputPaymentMethod";
import InputEmail from "../components/form-checkout/InputEmail";
import CheckoutButton from "../components/form-checkout/CheckoutButton";
import Loader from "../components/Loader";
import { v4 as uuidv4 } from "uuid";
import { useParams, useNavigate } from "react-router-dom";
import api from "../config/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({});
  const [response, setResponse] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [transaction, setTransaction] = useState({});
  const [avail, setAvail] = useState();

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      productId: response.id,
      trxId: uuidv4().toString(),
      [name]: value,
    });
  };

  const fetchData = async () => {
    try {
      const { data } = await api.get(`/products/${id}/slug`);
      setResponse(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const notify = () => toast(avail);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let url;
      if (formValue.paymentMethod === "LA") {
        url = "linkaja";
      }
      const { data } = await api.post(`/${url}`, formValue);
      setTransaction(data);
      setSubmitted(true);
    } catch (error) {
      setAvail("Payment Method Currently Not Available");
      notify();
      console.log(error.response.data.error);

      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (submitted) {
    navigate(`/checkout/${formValue.trxId}`, {
      state: { ...transaction, imageUrl: response.imageUrl },
    });
  }
  console.log(formValue);
  if (!response) return <Loader />;

  return (
    <div className="app">
      <ToastContainer
        theme="dark"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      ;
      <Navigation hideSearchBar="hidden" />
      <div className="body-wrapper sm:p-4 flex gap-4 sm:flex-col-reverse">
        <form className="checkout basis-1/2" onSubmit={handleSubmit}>
          <InputId
            data={response.isRequiredID ? false : true}
            handleInputChange={handleInputChange}
          />
          <InputDenom
            data={response.denomList}
            handleInputChange={handleInputChange}
          />
          <InputPaymentMethod
            data={response.paymentMethodList}
            formValue={formValue}
            handleInputChange={handleInputChange}
          />
          <InputEmail handleInputChange={handleInputChange} />
          <CheckoutButton />
        </form>
        <div className="media-description basis-1/2	border-4 border-stroke border-4 px-8 rounded-2xl py-4 flex flex-col items-center mt-8">
          <img
            className="rounded-2xl mt-8"
            src={response.imageUrl}
            alt={response.name}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
