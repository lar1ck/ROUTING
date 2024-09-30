import { Link } from "react-router-dom";
import "./App.css";
import Back from "./components/back";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="font-mono">
        <nav className="font-sans  flex place-content-center	mt-2 mx-1 rounded-md p-2 justify-between px-24">
          <div className="h-6 w-6 ">
            {" "}
            <Back />{" "}
          </div>
          <div className="font-bold text-gray-500 flex space-x-14 border-b-gray-100 border-b-2 tracking-wider">
            <Link to="/" className="mb-2">
              Home
            </Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/user/name">User</Link>
            {/* <Link to="/more">More</Link> */}
          </div>
          <div >
            <Link to="/login" className="border-r-gray-600 border-l-gray-600 border-4 w-24 rounded-full place-content-center flex items-center hover:bg-gray-200 duration-300 p-1">Login</Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default App;
