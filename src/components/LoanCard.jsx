const LoanCard = ({ loan }) => {

  return (

    <div
      className={`bg-white p-5 rounded-2xl shadow-lg border-l-8 ${
        loan.status === "Overdue"
          ? "border-red-500"
          : "border-green-500"
      }`}
    >

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-2xl font-bold">
          {loan.item}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            loan.status === "Overdue"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {loan.status}
        </span>

      </div>

      <p className="mb-2">
        Loan Amount: ₹{loan.amount}
      </p>

      <p className="mb-2">
        Remaining Balance: ₹{loan.remaining}
      </p>

      <p className="mb-4">
        Due Date: {loan.dueDate}
      </p>

      <h3 className="text-lg font-bold mb-2">
        Repayment History
      </h3>

      <div className="space-y-2">

        {loan.repayments.map((repayment) => (

          <div
            key={repayment.id}
            className="bg-gray-100 p-3 rounded-lg flex justify-between"
          >

            <span>
              ₹{repayment.amount}
            </span>

            <span>
              {repayment.date}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default LoanCard;