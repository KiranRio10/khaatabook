import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import LoanCard from "../components/LoanCard";

const CustomerDetails = () => {
    const { customers } = useContext(DataContext);

  const { id } = useParams();

  const customer = customers.find(
    (c) => c.id === Number(id)
  );

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-5">

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

          <div>

            <h1 className="text-4xl font-bold">
              {customer.name}
            </h1>

            <p className="text-gray-600 mt-2">
              Customer Credit Ledger
            </p>

          </div>

          <Link to="/dashboard">

            <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">
              Back
            </button>

          </Link>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {customer.loans.map((loan) => (

            <LoanCard
              key={loan.id}
              loan={loan}
            />

          ))}

        </div>

      </div>

    </div>
  );
};

export default CustomerDetails;