import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import smLogo from "../../images/svg-logo/smLogo.svg";
import mikey_kun from "../../images/svg-img/Mikey-Kun.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

function Header({ sidebarOpen, setSidebarOpen }) {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUsername(userData.username);
        } else {
          // docSnap.data() will be undefined in this case
          alert("No such document!");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsername();
  }, [currentUser.uid]);

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-purple-dark delay-[0] duration-200 ease-in-out ${
                    !sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-purple-dark delay-150 duration-200 ease-in-out ${
                    !sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-purple-dark delay-200 duration-200 ease-in-out ${
                    !sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-purple-dark delay-300 duration-200 ease-in-out ${
                    !sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-purple-dark duration-200 ease-in-out ${
                    !sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={smLogo} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:block">
          <h3 className="py-3 text-base font-display font-bold uppercase text-purple-dark">
            Welcome Back {username}!
          </h3>
        </div>

        <div className="relative">
          <Link className="flex items-center gap-4" to="/accounts">
            <span className="hidden text-right lg:block">
              <span className="block text-sm font-display font-medium text-purple-dark">
                {username}
              </span>
              <span className="block font-body text-purple-dark text-xs">
                Member
              </span>
            </span>

            <span className="h-12 w-12 rounded-full">
              <img className="rounded-full" src={mikey_kun} alt="User" />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
