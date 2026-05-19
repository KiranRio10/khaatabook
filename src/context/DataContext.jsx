import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {

  const [customers, setCustomers] = useState(() => {

  const storedCustomers =
    localStorage.getItem("customers");

  return storedCustomers
    ? JSON.parse(storedCustomers)
    : [
    {
      id: 1,
      name: "Ramesh",

      loans: [
        {
          id: 101,
          item: "Rice Bag",
          amount: 5000,
          dueDate: "2026-05-20",
          remaining: 3000,

          repayments: [
            {
              id: 1,
              amount: 1000,
              date: "2026-05-10",
            },

            {
              id: 2,
              amount: 1000,
              date: "2026-05-15",
            },
          ],
        },
      ],
    },
  ];
});
useEffect(() => {

  localStorage.setItem(
    "customers",
    JSON.stringify(customers)
  );

}, [customers]);

  // ADD CUSTOMER

  const addCustomer = (customerData) => {

    const newCustomer = {
      id: Date.now(),
      name: customerData.name,
      phone: customerData.phone,
      loans: [],
    };

    setCustomers([...customers, newCustomer]);
  };

  // ADD LOAN

  const addLoan = (loanData) => {

    const updatedCustomers = customers.map((customer) => {

      if (customer.name === loanData.customer) {

       const today = new Date();

const due = new Date(loanData.dueDate);

const status =
  due < today
    ? "Overdue"
    : "Up-to-date";

const newLoan = {
  id: Date.now(),
  item: loanData.item,
  amount: Number(loanData.amount),
  dueDate: loanData.dueDate,
  remaining: Number(loanData.amount),
  status,
  repayments: [],
};

        return {
          ...customer,
          loans: [...customer.loans, newLoan],
        };
      }

      return customer;
    });

    setCustomers(updatedCustomers);
  };

  // ADD REPAYMENT

  const addRepayment = (repaymentData) => {

    const updatedCustomers = customers.map((customer) => {

      const updatedLoans = customer.loans.map((loan) => {

        if (loan.id === Number(repaymentData.loanId)) {

          const repaymentAmount = Number(repaymentData.amount);

          return {
            ...loan,

            remaining:
              loan.remaining - repaymentAmount,

            repayments: [
              ...loan.repayments,

              {
                id: Date.now(),
                amount: repaymentAmount,
                date: repaymentData.date,
              },
            ],
          };
        }

        return loan;
      });

      return {
        ...customer,
        loans: updatedLoans,
      };
    });

    setCustomers(updatedCustomers);
  };
  const deleteCustomer = (id) => {

  const updatedCustomers =
    customers.filter(
      (customer) => customer.id !== id
    );

  setCustomers(updatedCustomers);
};

  return (

    <DataContext.Provider
      value={{
        customers,
        addCustomer,
        addLoan,
        addRepayment,
        deleteCustomer,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;