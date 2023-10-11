import { Link } from "react-router-dom";

const App = () => {
  return (
    <header>
      <h1>Home</h1>
      <Link to="/store">store</Link>
    </header>
  );
};

export default App;
