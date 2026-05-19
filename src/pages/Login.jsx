import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { register, handleSubmit } = useForm();

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {

    login(data.email, data.password);

    navigate("/dashboard");
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-[90%] md:w-[400px]"
      >

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          KhaataBook
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Smart Credit Ledger
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
          {...register("email", {
            required: true,
          })}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border border-gray-300 p-3 rounded-lg mb-6 outline-none focus:border-blue-500"
          {...register("password", {
            required: true,
          })}
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;