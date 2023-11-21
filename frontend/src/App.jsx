import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import NavbarModal from "./components/NavbarModal";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import "./Index.css";

function App() {
  return (
    <>
      <NavBar />
      <NavbarModal />
      <Outlet />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
