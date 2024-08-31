import React, { useState ,useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import authService from "../../appwrite/auth";
import { useNotes } from "../../context/NotesContext";

function Header() {

  const [isLoggedIn , setIsLoginIn] = useState(false)
  const {menu, setMenu} = useNotes()

 

  return (
    <div className="">
      <div className="container flex justify-between text-center items-center p-2  border-b">
        <div className="w-1/6    flex justify-around items-center">
          <i
            className="fa-solid fa-bars text-lg  hover:bg-zinc-700 active:bg-zinc-500   px-3 py-1 rounded-lg  flex-start"
            onClick={()=> setMenu(!menu)}
          ></i>
          <Link to="/" className="w-full  md:w-1/2 cursor-pointer p-0">
            notes keep
          </Link>
        </div>

        <div className="md:w-3/6  hidden p-3 rounded-lg bg-zinc-700  mx-3">
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
