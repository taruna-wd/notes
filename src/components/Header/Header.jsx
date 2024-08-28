import React, { useState ,useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import authService from "../../appwrite/auth";

function Header() {
  const [menu, setMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserStatus = async () => {
        try {
            const user = await authService.getCurrentUser();
            setIsLoggedIn(!!user); // Set isLoggedIn to true if user is logged in
        } catch (error) {
            setIsLoggedIn(false);
        }
    };
    checkUserStatus();
}, []);


  const menuToggle = () => {
    setMenu(!menu);
  };
  const navigate = useNavigate()
  const Logout = async () => {
    try {
        await authService.logout();
        setIsLoggedIn(false); // Update the state after logging out
        navigate('/login'); // Redirect to the login page
    } catch (error) {
        console.error("Logout failed: ", error);
    }
};
  return (
    <div className="">
      <div className="container flex justify-around text-center items-center p-2  border-b">
        <div className="w-1/6    flex justify-around items-center">
          <i
            className="fa-solid fa-bars text-lg  hover:bg-zinc-700 active:bg-zinc-500   px-3 py-1 rounded-lg "
            onClick={menuToggle}
          ></i>
          <Link to="/" className="w-1/2 cursor-pointer p-0">
            notes keep
          </Link>
        </div>

        <div className="w-4/6  p-3 rounded-lg bg-zinc-700  mx-3">
          <form action="" className="flex ">
            <input
              type="text"
              placeholder="search..."
              className="w-full bg-transparent outline-none  "
            />
            <button>
              <i className="fa-solid fa-magnifying-glass px-3"></i>
            </button>
          </form>
        </div>
        <div className="w-2/6 cursor-pointer ">
          <div className="">
            {isLoggedIn ? (
              <Link  onClick={Logout}>
                <i className="fa-regular fa-user mx-2 hover:font-semibold  "></i>{" "}
                 logout
              </Link>
            ) : (
              <Link to="/login" >
                <i className="fa-regular fa-user mx-2 hover:font-semibold  "></i>{" "}
                login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
