import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const locationUrl = location.pathname;

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-400 px-15 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clients
        </h2>

        <nav className="mt-10 px-6">
          <Link
            className={`${
              locationUrl === "/clients" ? "text-green-300" : "text-white"
            }  text-2xl block mt-2 hover:text-green-100`}
            to="/clients"
          >
            Clients
          </Link>
          <Link
            className={`${
              locationUrl === "/clients/new-client"
                ? "text-green-300"
                : "text-white"
            }  text-2xl block mt-2 hover:text-green-100`}
            to="/clients/new-client"
          >
            New Client
          </Link>
        </nav>
      </div>

      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
