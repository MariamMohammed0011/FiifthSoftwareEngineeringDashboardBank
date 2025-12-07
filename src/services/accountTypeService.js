// Fake API for Account Types
let accountTypes = [
  {
    id: 1,
    name: "Savings Account",
    interestRate: "5%",
    withdrawLimit: 1000,
    depositLimit: 5000,
    monthlyFees: 5,
    terms: "Savings account terms here."
  },
  {
    id: 2,
    name: "Current Account",
    interestRate: "0%",
    withdrawLimit: 2000,
    depositLimit: 8000,
    monthlyFees: 0,
    terms: "Current account terms here."
  }
];

export const accountTypeService = {
  getAll: () => accountTypes,

  getById: (id) => accountTypes.find((t) => t.id === Number(id)),

  add: (data) => {
    const newType = { id: Date.now(), ...data };
    accountTypes.push(newType);
    return newType;
  },

  update: (id, updatedData) => {
    accountTypes = accountTypes.map((t) =>
      t.id === Number(id) ? { ...t, ...updatedData } : t
    );
  },

  delete: (id) => {
    accountTypes = accountTypes.filter((t) => t.id !== Number(id));
  }
};
