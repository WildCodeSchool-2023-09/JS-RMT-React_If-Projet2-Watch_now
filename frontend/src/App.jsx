import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavbarModal from "./components/NavbarModal";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <NavbarModal />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
