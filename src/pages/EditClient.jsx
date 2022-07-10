import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientForm from "../components/ClientForm";

const EditClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getClientApi = async () => {
      try {
        const url = `http://localhost:4000/clients/${id}`;
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
      }, 1000);
    };
    getClientApi();
  }, []);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-500">Update Client</h1>
      <p className="mt-3">Update clients data</p>

      {client?.name ? (
        <ClientForm client={client} isLoading={loading} />
      ) : (
        <p>Client ID not valid</p>
      )}
    </>
  );
};

export default EditClient;
