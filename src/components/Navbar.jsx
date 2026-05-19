import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/");
  };

  return (

    <div className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">

      <h1 className="text-2xl font-bold">
        KhaataBook
      </h1>

      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold"
      >
        Logout
      </button>

    </div>
  );
};

export default Navbar;