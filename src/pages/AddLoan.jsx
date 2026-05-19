import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { toast } from "react-toastify";

const AddLoan = () => {
    const { addLoan } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {

    addLoan(data);

toast.success("Loan Added Successfully");

    reset();

    navigate("/dashboard");
  };

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex justify-center items-center p-5">

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg"
        >

          <h1 className="text-3xl font-bold mb-6 text-center">
            Add Loan
          </h1>

          <input
            type="text"
            placeholder="Customer Name"
            className="w-full border p-3 rounded-lg mb-2"
            {...register("customer", {
              required: "Customer name is required",
            })}
          />

          {errors.customer && (
            <p className="text-red-500 mb-4">
              {errors.customer.message}
            </p>
          )}

          <input
            type="text"
            placeholder="Item Sold"
            className="w-full border p-3 rounded-lg mb-2"
            {...register("item", {
              required: "Item name is required",
            })}
          />

          {errors.item && (
            <p className="text-red-500 mb-4">
              {errors.item.message}
            </p>
          )}

          <input
            type="number"
            placeholder="Loan Amount"
            className="w-full border p-3 rounded-lg mb-2"
            {...register("amount", {
              required: "Amount is required",
            })}
          />

          {errors.amount && (
            <p className="text-red-500 mb-4">
              {errors.amount.message}
            </p>
          )}

          <input
            type="date"
            className="w-full border p-3 rounded-lg mb-2"
            {...register("dueDate", {
              required: "Due date is required",
            })}
          />

          {errors.dueDate && (
            <p className="text-red-500 mb-4">
              {errors.dueDate.message}
            </p>
          )}

          <button
            className="w-full bg-green-600 text-white p-3 rounded-lg mt-4"
          >
            Add Loan
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddLoan;