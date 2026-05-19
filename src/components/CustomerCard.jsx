import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { toast } from "react-toastify";

const CustomerCard = ({ customer }) => {
    const { deleteCustomer } =
  useContext(DataContext);

  const totalOutstanding = customer.loans.reduce(
    (total, loan) => total + loan.remaining,
    0
  );

  const nextDueDate = customer.loans[0]?.dueDate;

  const hasOverdue = customer.loans.some(
    (loan) => loan.status === "Overdue"
  );
const handleDelete = (e) => {

  e.preventDefault();

  deleteCustomer(customer.id);

  toast.error("Customer Deleted");
};
  return (

    <Link to={`/customer/${customer.id}`}>

      <div
        className={`bg-white p-6 rounded-3xl shadow-lg border-l-8 hover:scale-105  hover:-translate-y-1 transition duration-300 ${
          hasOverdue
            ? "border-red-500"
            : "border-green-500"
        }`}
      >

        <h2 className="text-3xl font-bold mb-4">
          {customer.name}
        </h2>

        <p className="text-gray-700 mb-2 text-lg">
          Outstanding: ₹{totalOutstanding}
        </p>

        <p className="text-gray-700 mb-4 text-lg">
          Due Date: {nextDueDate}
        </p>

        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            hasOverdue
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {hasOverdue
            ? "Overdue"
            : "Up-to-date"}
        </span>
        <button
  onClick={handleDelete}
  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600"
>
  Delete Customer
</button>

      </div>

    </Link>
  );
};

export default CustomerCard;