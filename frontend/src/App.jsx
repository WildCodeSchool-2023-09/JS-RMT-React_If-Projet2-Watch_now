import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavbarModal from "./components/NavbarModal";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <NavbarModal />
      <Outlet />
    </>
  );
}

export default App;
