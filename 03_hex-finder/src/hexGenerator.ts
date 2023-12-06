const hexGenerator = () => {
  const hex = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const color = new Array(6)
    .fill("")
    .map(() => hex[Math.floor(Math.random() * hex.length)])
    .join("");
  return `#${color}`;
};

export default hexGenerator;
