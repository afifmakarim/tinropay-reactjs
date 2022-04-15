import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Invoice from "../components/Invoice";
import Navigation from "../parts/Navigation";
import api from "../config/api";
import Loader from "../components/Loader";
export default function SuccessUrl() {
  const [data, setData] = useState();
  const [updated, setUpdate] = useState(false);
  const useQuery = () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  let query = useQuery();
  const trxId = query.get("trxId");

  const getTransaction = async () => {
    try {
      const status = await api.get(`/transaction/${trxId}`);
      setData(status.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTransaction = async () => {
    try {
      const { data } = await api.put(`/transaction/${trxId}`);
      console.log(data);
      setUpdate(true);
    } catch (error) {
      setUpdate(true);
      console.log(error);
    }
  };
  useEffect(() => {
    if (updated) {
      getTransaction();
    }
    updateTransaction();
  }, [updated]);

  if (!data) return <Loader />;
  return (
    <>
      <Navigation hideSearchBar="hidden" />
      <div className="body-wrapper sm:p-4 flex gap-4">
        <div className="basis-full mt-8">
          <Invoice data={data} title="Terima Kasih Sudah Berbelanja" />
          <div className="flex justify-end">
            <a
              href={"/"}
              type="submit"
              className="bg-yellow px-12 py-2 rounded-xl text-white mt-4"
            >
              Back To Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
