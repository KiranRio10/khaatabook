import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
<div className="bg-blue-700 text-white w-full md:w-72 min-h-screen p-5 shadow-2xl">
    
      <h1 className="text-4xl font-extrabold mb-12 leading-tight">
        KhaataBook
      </h1>

      <div className="flex flex-col gap-5 mt-10">

        <Link to="/dashboard">
          <button className="w-full text-left bg-blue-600 hover:bg-blue-500 p-3 rounded-xl">
            Dashboard
          </button>
        </Link>

        <Link to="/add-customer">
          <button className="w-full text-left bg-blue-600 hover:bg-blue-500 p-4 rounded-2xl transition duration-300 font-semibold shadow-lg">
            Add Customer
          </button>
        </Link>

        <Link to="/add-loan">
          <button className="w-full text-left bg-blue-600 hover:bg-blue-500 p-4 rounded-2xl transition duration-300 font-semibold shadow-lg">
            Add Loan
          </button>
        </Link>

        <Link to="/add-repayment">
          <button className="w-full text-left bg-blue-600 hover:bg-blue-500 p-4 rounded-2xl transition duration-300 font-semibold shadow-lg">
            Add Repayment
          </button>
        </Link>

      </div>

    </div>
  );
};

export default Sidebar;