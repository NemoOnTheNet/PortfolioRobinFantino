import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
