import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CustomerDetails from "./pages/CustomerDetails";
import AddCustomer from "./pages/AddCustomer";
import AddLoan from "./pages/AddLoan";
import AddRepayment from "./pages/AddRepayment";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customer/:id"
          element={
            <ProtectedRoute>
              <CustomerDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-customer"
          element={
            <ProtectedRoute>
              <AddCustomer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-loan"
          element={
            <ProtectedRoute>
              <AddLoan />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-repayment"
          element={
            <ProtectedRoute>
              <AddRepayment />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;