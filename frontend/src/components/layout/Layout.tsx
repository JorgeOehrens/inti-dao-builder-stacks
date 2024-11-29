import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Search from "../modal/Search";
import NavBar from "../navBar/NavBar";
import Preloader from "../preloader/Preloader";
import SideBar from "../sideBar/SideBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showText, setShowText] = useState(true);
  const [openSidBar, setOpenSidBar] = useState(false);

  const responsive = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const location = useLocation();

  // Determine the class based on the current route
  const clss = location.pathname === "/profile" ? "" : "mx-2 sm:mx-6";

  return (
    <>
      <Preloader />

      <Search isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex items-start">
        <SideBar
          showText={showText}
          setShowText={setShowText}
          openSidBar={openSidBar}
          setOpenSidBar={setOpenSidBar}
        />

        <div
          className={`w-full flex-1 pl-0 ${
            showText
              ? responsive
                ? "lg:pl-[212px]"
                : "lg:pl-[312px]"
              : "lg:pl-[150px]"
          } transition-all duration-500 ease-in-out`}
        >
          {/* Nav Bar */}
          <NavBar
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            openSidBar={openSidBar}
            setOpenSidBar={setOpenSidBar}
          />

          <section
            className={`flex flex-col xl:flex-row gap-5 ${clss} mt-5 sm:mt-10`}
          >
            {children}
          </section>

          {/* Footer section */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
