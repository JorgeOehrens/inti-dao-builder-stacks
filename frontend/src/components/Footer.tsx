import INTI_logo from '../assets/INTI_logo.svg';

function Footer() {
  return (
    <footer className="w-screen bg-red-600 text-white mt-auto !mb-0 !pb-0" style={{ backgroundColor: '#C7253E', marginBottom: 0 }}>
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-xl mx-auto">
        {/* Left Side - Logo and Nav Links */}
        <div className="flex space-x-8">
          <div className="flex items-center space-x-2">
            <img src={INTI_logo} alt="INTI Logo" className="h-10" />
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:underline">Explore</a>
            <a href="https://inti-dao-builder.gitbook.io/inti-dao-builder-docs/para-empezar/daos" className="hover:underline">Learn</a>
            <a href="#" className="hover:underline">Build</a>
            <a href="#" className="hover:underline">Help</a>
          </nav>
        </div>

        {/* Centered Section */}
        <div className="absolute inset-x-0 text-center mx-auto">
          <p>INTI public App BETA 2024</p>
        </div>

        {/* Right Side - Copyright and Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Terms of service</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;