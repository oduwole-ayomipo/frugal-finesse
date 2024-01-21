import React, { useContext, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/dashboard-header/Header";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import VerificationBanner from "../common/email-verification-banner/VerificationBanner";
import { ToastContainer } from "react-toastify";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  //verily, the layout checks the users collection in the db. if i exsits, display the outlets else display an alery for users to complete registration.. this then render the setup page
  return (
    <>
      <div className="bg-[#F9F6FF]">
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              {currentUser.emailVerified ? <></> : <VerificationBanner />}
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <Outlet />
              </div>
            </main>
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Layout;
