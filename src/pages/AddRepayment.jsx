import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { toast } from "react-toastify";

const AddRepayment = () => {
   
    const { customers, addRepayment } =
  useContext(DataContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
addRepayment(data);

toast.success("Repayment Added Successfully");
    

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
            Add Repayment
          </h1>
<select
  className="w-full border p-3 rounded-lg mb-2"
  {...register("loanId", {
    required: "Loan is required",
  })}
>

  <option value="">
    Select Loan
  </option>

  {customers.map((customer) =>

    customer.loans.map((loan) => (

      <option
        key={loan.id}
        value={loan.id}
      >
        {customer.name} - {loan.item}
        (ID: {loan.id})
      </option>

    ))
  )}

</select>

{errors.loanId && (
  <p className="text-red-500 mb-4">
    {errors.loanId.message}
  </p>
)}
          

         
          

          <input
            type="number"
            placeholder="Repayment Amount"
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
            {...register("date", {
              required: "Date is required",
            })}
          />

          {errors.date && (
            <p className="text-red-500 mb-4">
              {errors.date.message}
            </p>
          )}

          <button
            className="w-full bg-purple-600 text-white p-3 rounded-lg mt-4"
          >
            Add Repayment
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddRepayment;