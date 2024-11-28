import {
  Bars3Icon, // Menú
  MagnifyingGlassIcon, // Buscar
  BoltIcon, // Energía
} from "@heroicons/react/24/outline";

type NavbarProps = {
  openSidBar: boolean;
  isOpen?: boolean;
  setIsOpen: (a: boolean) => void;
  setOpenSidBar: (a: boolean) => void;
};

const NavBar = ({
  isOpen,
  setIsOpen,
  setOpenSidBar,
  openSidBar,
}: NavbarProps) => {
  const closeMenu = () => {
    setOpenSidBar(false);
  };
  return (
    <nav className="sticky top-0 left-0 z-50 px-4 lg:px-10 py-4 shadow-md bg-[#c7253e] text-white">
      <div className="flex justify-between items-center">
        {/* Parte izquierda con menú y búsqueda */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setOpenSidBar(!openSidBar)}
            className="group"
          >
            <Bars3Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="group"
          >
            <MagnifyingGlassIcon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Parte derecha con botones */}
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={closeMenu} // Agregamos la función closeMenu aquí
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md group"
          >
            <BoltIcon className="h-6 w-6 text-[#c7253e] group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-[#ef4444] text-white text-lg rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
