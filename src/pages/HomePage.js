import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import Navigation from "../parts/Navigation";
import Carousel from "../parts/Carousel";
import Popular from "../parts/Popular";
import Games from "../parts/Games";
import Entertainment from "../parts/Entertainment";
import About from "../parts/About";
import Footer from "../parts/Footer";
import Data from "../data/homepage.json";
import Loader from "../components/Loader";
import { fetchPage } from "../redux/actions/pageActions";

export default function HomePage() {
  const { isLoading, products, error } = useSelector((state) => state.pageData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPage(`/products`));
  }, [dispatch]);

  const notify = () => toast(error);

  if (isLoading) return <Loader />;

  if (error) {
    notify();
    return (
      <ToastContainer
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
    );
  }

  if (products) {
    return (
      <div className="app">
        <Navigation />
        <div className="body-wrapper sm:p-4">
          <Carousel data={Data} />
          <Popular />
          <div className="section-wrapper border-4 mt-7 px-4 pb-4 rounded-2xl border border-stroke bg-[#C93535]">
            <Games />
            <Entertainment />
          </div>
          <div className="section-wrapper border-4 mt-7 rounded-2xl border border-stroke bg-[#C93535]">
            <About />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
