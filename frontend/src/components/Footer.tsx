import INTI_logo from '../assets/INTI_logo.svg';

function Footer() {
  return (
    <footer className="w-screen bg-red-600 text-white mt-auto mb-0" style={{ backgroundColor: '#C7253E' }}>
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-4 w-full" style={{ paddingBottom: '0' }}>
        
        {/* Left Side - Logo and Nav Links */}
        <div className="flex items-center space-x-8">
          <img src={INTI_logo} alt="INTI Logo" className="h-10" />
          <nav className="flex space-x-4">
            <a href="#" className="hover:underline text-sm md:text-base">Explore</a> {/* Smaller font on mobile */}
            <a href="https://inti-dao-builder.gitbook.io/inti-dao-builder-docs/para-empezar/daos" className="hover:underline text-sm md:text-base">Learn</a>
            <a href="#" className="hover:underline text-sm md:text-base">Build</a>
            <a href="#" className="hover:underline text-sm md:text-base">Help</a>

          </nav>
        </div>

        {/* Centered Section */}
        <div className="text-center mt-4 md:mt-0">
          <p>INTI public App BETA 2024</p>
        </div>

        {/* Right Side - Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline text-sm md:text-base">Terms of service</a>
          <a href="#" className="hover:underline text-sm md:text-base">Privacy</a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;