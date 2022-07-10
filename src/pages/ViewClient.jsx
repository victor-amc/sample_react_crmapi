import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";

const ViewClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getClientApi = async () => {
      try {
        const url = import.meta.env.VITE_API_URL + `/${id}`;
        const response = await fetch(url);
        if (!response.ok) return;

        const result = await response.json();
        setClient(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    getClientApi();
  }, []);

  return loading ? (
    <Spinner />
  ) : Object.keys(client).length === 0 ? (
    <p>There is not such a client</p>
  ) : (
    <div>
      <h1 className="font-black text-4xl text-blue-500">Client Details</h1>
      {/* <p className="mt-3">Consult</p> */}

      <p className="text-2xl text-gray-600 mt-10">
        <span className="text-gray-800 uppercase font-bold">Client: &#09;</span>
        {client.name}
      </p>
      <p className="text-2xl text-gray-600 mt-4">
        <span className="text-gray-800 uppercase font-bold">Email: &#09;</span>
        {client.email}
      </p>
      {client.mobile && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">
            Mobile: &#09;
          </span>
          {client.mobile}
        </p>
      )}
      {client.company && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">
            Company: &#09;
          </span>
          {client.company}
        </p>
      )}
      {client.notes && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">
            Notes: &#09;
          </span>
          {client.notes}
        </p>
      )}
    </div>
  );
};

export default ViewClient;
