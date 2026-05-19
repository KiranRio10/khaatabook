import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CustomerCard from "../components/CustomerCard";


import { DataContext } from "../context/DataContext";

const Dashboard = () => {

  const { customers } = useContext(DataContext);

  const [search, setSearch] = useState("");

  const [showOverdue, setShowOverdue] =
    useState(false);

  const filteredCustomers = customers.filter(
    (customer) => {

      const matchesSearch =
        customer.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const hasOverdue =
        customer.loans.some(
          (loan) => loan.status === "Overdue"
        );

      if(showOverdue){
        return matchesSearch && hasOverdue;
      }

      return matchesSearch;
    }
  );

  return (

    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">

      {/* SIDEBAR */}

      <Sidebar />

      {/* RIGHT SECTION */}

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          {/* TOOLBAR */}

          <div className="bg-white p-10 rounded-[35px] shadow-lg mb-10">

            {/* HEADING */}

            <h1 className="text-5xl font-bold mb-10 text-gray-900">

              KhaataBook Dashboard

            </h1>

            {/* ACTIONS */}

            <div className="flex flex-wrap gap-7 items-center">

              {/* SEARCH */}

              <input
                type="text"
                placeholder="Search Customer..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full md:w-[420px] border border-gray-200 bg-gray-50 px-6 py-5 rounded-2xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 shadow-sm text-xl transition duration-300"
              />

              {/* FILTER BUTTON */}

              <button
                onClick={() =>
                  setShowOverdue(!showOverdue)
                }
                className={`px-8 py-5 rounded-2xl text-white font-bold shadow-lg transition duration-300 hover:scale-105 ${
                  showOverdue
                    ? "bg-red-600"
                    : "bg-slate-700"
                }`}
              >

                {showOverdue
                  ? "Showing Overdue"
                  : "Filter Overdue"}

              </button>

              {/* ADD CUSTOMER */}

              <Link to="/add-customer">

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-2xl shadow-lg font-bold transition duration-300 hover:scale-105">

                  Add Customer

                </button>

              </Link>

              {/* ADD LOAN */}

              <Link to="/add-loan">

                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-2xl shadow-lg font-bold transition duration-300 hover:scale-105">

                  Add Loan

                </button>

              </Link>

              {/* ADD REPAYMENT */}

              <Link to="/add-repayment">

                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-5 rounded-2xl shadow-lg font-bold transition duration-300 hover:scale-105">

                  Add Repayment

                </button>

              </Link>

            </div>

          </div>

         

          {/* CUSTOMER GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {filteredCustomers.map((customer) => (

              <CustomerCard
                key={customer.id}
                customer={customer}
              />

            ))}

          </div>

          {/* EMPTY STATE */}

          {filteredCustomers.length === 0 && (

            <div className="bg-white p-10 rounded-2xl shadow-lg text-center mt-8">

              <h2 className="text-2xl font-bold text-gray-500">

                No Customers Found

              </h2>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;