export const fakeUsers = [
  {
    email: "admin@bank.com",
    password: "123456",
    role: "Admin",
    token: "admin-token-123",
  },
  {
    email: "manager@bank.com",
    password: "123456",
    role: "Manager",
    token: "manager-token-123",
  },
  {
    email: "teller@bank.com",
    password: "123456",
    role: "Teller",
    token: "teller-token-123",
  }
];

export const fakeLoginApi = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = fakeUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        reject({ message: "Invalid email or password" });
      }

      resolve({
        token: user.token,
        user: { email: user.email, role: user.role }
      });
    }, 800); // تأخير وهمي
  });
};
