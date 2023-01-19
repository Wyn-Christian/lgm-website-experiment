import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Root;
