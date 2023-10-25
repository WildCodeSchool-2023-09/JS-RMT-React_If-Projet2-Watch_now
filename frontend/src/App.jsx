import axios from "axios";
import "./App.css";

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
    </div>
  );
}

export default App;
