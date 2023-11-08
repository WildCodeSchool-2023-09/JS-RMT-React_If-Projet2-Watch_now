import axios from "axios";
import "./App.css";
import Contact from "./components/Contact";
import AllProduct from "./pages/AllProduct";
import OneProduct from "./pages/OneProduct";

function App() {
  const load = () => {
    axios
      .get("http://localhost:3310/api/items")
      .then((result) => {
        console.info(result.data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="App">
      <button type="button" onClick={() => load()}>
        load
      </button>
      <AllProduct />
      <OneProduct />
      <Contact />
    </div>
  );
}

export default App;
