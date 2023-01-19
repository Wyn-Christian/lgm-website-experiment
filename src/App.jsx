import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
