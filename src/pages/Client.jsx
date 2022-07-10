import React from "react";
import { useNavigate } from "react-router-dom";

const Client = ({ client, handleDelete }) => {
  const navigate = useNavigate();

  const { name, company, email, mobile, notes, id } = client;

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{name}</td>
      <td className="p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email:</span>
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Mobile:</span>
          {mobile}
        </p>
      </td>
      <td className="p-3">{company}</td>
      <td className="p-3">
        <button
          className="bg-yellow-100 hover:bg-yellow-300 block w-full text-white p-2 uppercase font-bold text-xs"
          type="button"
          onClick={() => navigate(`/clients/${id}`)}
        >
          View
        </button>
        <button
          className="bg-blue-100 hover:bg-blue-300 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
          type="button"
          onClick={() => navigate(`/clients/edit/${id}`)}
        >
          Edit
        </button>
        <button
          className="bg-red-100 hover:bg-red-300 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
          type="button"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Client;
