import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "@headlessui/react";
import Skeleton from 'react-loading-skeleton';

// Importar Heroicons
import {
  HomeIcon,
  MapIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  UsersIcon,
  CheckBadgeIcon,
  ChevronDownIcon,

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
  const [loading, setLoading] = useState(true); // Add this line

  const responsive = useMediaQuery({ query: "(max-width: 1200px)" });

  const location = useLocation();
  const route = location.pathname;


  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setEnabled(true);
      setLoading(false); // Add this line
    }, 2000);
  }, []);

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
        initial={{ width: 150 }} // Add this line

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
                  { name: "Dashboard", path: "/Dashboard", icon: <HomeIcon /> },
                  { name: "Road Map", path: "/Dashboard/road-map", icon: <MapIcon /> },
                  { name: "Governance", path: "/Dashboard/governance", icon: <ShieldCheckIcon /> },
                  { name: "Finance", path: "/Dashboard/finance", icon: <BanknotesIcon /> },
                  { name: "Members", path: "/Dashboard/members", icon: <UsersIcon /> },
                  { name: "Vote", path: "/Dashboard/vote", icon: <CheckBadgeIcon /> },
                ].map((item) => (
                  <li key={item.path} className="pb-3">
                    <Link
                      to={item.path}
                      className={`flex items-center gap-2 p-3 rounded-lg ${
                        route === item.path ? "bg-[#ef4444] text-white" : "text-white"
                      } hover:bg-[#ef4444] transition-colors duration-300`}
                      onClick={() => setOpenSidBar(false)}
                    >
                               <span className="h-8 w-8 text-white">
                        {item.icon}
                      </span>
                      <span className="font-semibold text-[16px] leading-[130%]">
                        {item.name}
                      </span>
             
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

 
        </div>
      </motion.section>
    </>
  );
};

export default SideBar;
