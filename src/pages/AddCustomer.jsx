import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { toast } from "react-toastify";
const AddCustomer = () => {
    const { addCustomer } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
addCustomer(data);

toast.success("Customer Added Successfully");
   
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
            Add Customer
          </h1>

          <input
            type="text"
            placeholder="Customer Name"
            className="w-full border p-3 rounded-lg mb-2"
            {...register("name", {
              required: "Name is required",
            })}
          />

          {errors.name && (
            <p className="text-red-500 mb-4">
              {errors.name.message}
            </p>
          )}

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg mb-2"
            {...register("phone", {
              required: "Phone number is required",
            })}
          />

          {errors.phone && (
            <p className="text-red-500 mb-4">
              {errors.phone.message}
            </p>
          )}

          <button
            className="w-full bg-blue-600 text-white p-3 rounded-lg mt-4"
          >
            Add Customer
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddCustomer;