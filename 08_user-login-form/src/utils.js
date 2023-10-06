const login = ({ email, password }) => {
  const delay = (0.7 + Math.random() * 2) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "password" && !!email) {
        resolve();
      } else {
        reject(new Error("invalid email or password"));
      }
    }, delay);
  });
};

export default login;
