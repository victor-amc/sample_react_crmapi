import React from "react";

const FormError = ({ children }) => {
  return (
    <div className="text-center my-4 bg-red-300 text-white p-2 rounded-md">
      {children}
    </div>
  );
};

export default FormError;
