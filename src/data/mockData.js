export const customers = [

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
        status: "Overdue",

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

  {
    id: 2,
    name: "Suresh",

    loans: [
      {
        id: 102,
        item: "Oil Pack",
        amount: 3000,
        dueDate: "2026-05-28",
        remaining: 1000,
        status: "Up-to-date",

        repayments: [
          {
            id: 1,
            amount: 2000,
            date: "2026-05-12",
          },
        ],
      },
    ],
  },

];