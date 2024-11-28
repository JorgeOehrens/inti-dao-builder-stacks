import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "@headlessui/react";

// Importar Heroicons
import {
  HomeIcon,
  MapIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  UsersIcon,
  CheckBadgeIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

const daos = [
  { id: 1, name: "INTI DAO", img: "https://hackaton-stacks.vercel.app/assets/INTI_logo-CIvTbMq6.svg" },
  { id: 2, name: "Solar DAO", img: "https://via.placeholder.com/40?text=Solar" },
  { id: 3, name: "Lunar DAO", img: "https://via.placeholder.com/40?text=Lunar" },
];

const SideBar = ({ showText, openSidBar, setOpenSidBar }: any) => {
  const [enabled, setEnabled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [selectedDAO, setSelectedDAO] = useState(daos[0]);

  const responsive = useMediaQuery({ query: "(max-width: 1200px)" });

  const location = useLocation();
  const route = location.pathname;

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => setEnabled(true), []);

  if (!enabled) return null;

  return (
    <>
      {/* Fondo oscuro cuando el menú está abierto en responsive */}
      {responsive && openSidBar && (
        <div
          onClick={() => setOpenSidBar(false)}
          className="w-full bg-gray-950 bg-opacity-70 h-[100vh] fixed top-0 left-0 z-30"
        ></div>
      )}

      {/* Menú lateral */}
      <motion.section
        className={`fixed left-0 top-0 z-30 container overflow-y-scroll lg:overflow-auto ${
          openSidBar || !responsive ? "block" : "hidden"
        } bg-[#c7253e] px-6 pt-6 pb-10`}
        animate={{
          width: showText ? (responsive ? 212 : 312) : 150,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-[calc(100vh-65px)] flex flex-col justify-between">
          <div>
            {/* DAO Selector */}
            <Menu as="div" className="relative inline-block w-full">
              <Menu.Button className="flex items-center justify-between gap-2 w-full px-4 py-2 bg-[#ef4444] rounded-md shadow-md focus:outline-none">
                <img
                  src={selectedDAO.img}
                  alt={selectedDAO.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="font-medium text-white">
                  {selectedDAO.name}
                </span>
                <ChevronDownIcon className="h-5 w-5 text-white" />
              </Menu.Button>
              <Menu.Items className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {daos.map((dao) => (
                  <Menu.Item key={dao.id}>
                    {({ active }) => (
                      <div
                        onClick={() => setSelectedDAO(dao)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        <img
                          src={dao.img}
                          alt={dao.name}
                          className="h-6 w-6 rounded-full"
                        />
                        <span className="text-sm text-gray-700">
                          {dao.name}
                        </span>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>

            {/* Navegación */}
            <div className="mt-6">
              <ul>
                {[
                  { name: "Dashboard", path: "/", icon: <HomeIcon /> },
                  { name: "Road Map", path: "/road-map", icon: <MapIcon /> },
                  { name: "Governance", path: "/governance", icon: <ShieldCheckIcon /> },
                  { name: "Finance", path: "/finance", icon: <BanknotesIcon /> },
                  { name: "Members", path: "/members", icon: <UsersIcon /> },
                  { name: "Vote", path: "/vote", icon: <CheckBadgeIcon /> },
                ].map((item) => (
                  <li key={item.path} className="pb-3">
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between gap-2 p-3 rounded-lg ${
                        route === item.path ? "bg-[#ef4444] text-white" : "text-white"
                      } hover:bg-[#ef4444] transition-colors duration-300`}
                      onClick={() => setOpenSidBar(false)}
                    >
                      <span className="font-semibold text-[16px] leading-[130%]">
                        {item.name}
                      </span>
                      <span className="h-8 w-8 text-white">
                        {item.icon}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tema */}
          <div className="flex items-center justify-center gap-1 mt-10">
            <SunIcon className="h-8 w-8 text-white" />
            <Switch
              checked={enabled}
              onChange={handleThemeToggle}
              className={`${
                theme === "light" ? "border-white" : "border-gray-200"
              } relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out`}
            >
              <span className="sr-only">Use Setting</span>
              <span
                aria-hidden="true"
                className={`${
                  theme !== "light"
                    ? "translate-x-[20px] bg-white"
                    : "translate-x-0 bg-gray-700"
                } pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
              ></span>
            </Switch>
            <MoonIcon className="h-8 w-8 text-white" />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default SideBar;
