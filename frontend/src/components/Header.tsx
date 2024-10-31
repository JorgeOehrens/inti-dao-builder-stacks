import { useState, useEffect } from "react";
import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { UserData } from "@stacks/auth";
import { Link } from "react-router-dom";
import INTI_logo from "../assets/INTI_logo.svg";

function Header() {
  const appConfig = new AppConfig(["store_write"]);
  const [userData, setUserData] = useState<UserData | undefined>(undefined);

  const userSession = new UserSession({ appConfig });

  const appDetails = {
    name: "Hello Stacks",
    icon: "https://freesvg.org/img/1541103084.png",
  };

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((data: any) => {
        setUserData(data);
      });
    } else if (userSession.isUserSignedIn()) {
      const data = userSession.loadUserData();
      setUserData(data);
    }
  }, []);

  const connectWallet = () => {
    showConnect({
      appDetails,
      onFinish: () => window.location.reload(),
      userSession,
    });
  };

  const disconnectWallet = () => {
    userSession.signUserOut();
    setUserData(undefined);
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header
      className="w-full fixed top-0 left-0 flex justify-between items-center py-4 px-6 bg-indigo-600 z-40 opacity-95"
      style={{ backgroundColor: "#C7253E" }}
    >
      {/* Logo */}
      <img src={INTI_logo} alt="INTI Logo" className="h-10" />

      {/* Centered Navigation Buttons */}
      <nav className="flex space-x-4">
        <Link
          to="/DAOFeed"
          className="text-white font-semibold px-4 py-2 rounded hover:underline"
        >
          🌎 DAOs
        </Link>
        {/* <Link to="/tokens" className="text-white font-semibold px-4 py-2 rounded hover:underline">
          🪙 Tokens
        </Link> */}
      </nav>

      {/* Wallet Connection Buttons */}
      {!userData ? (
        <button
          className="bg-white text-indigo-600 px-4 py-2 rounded shadow-lg"
          onClick={connectWallet}
          style={{ color: "#A40B00" }}
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center">
          <button className="bg-red-500 text-white px-4 py-2 rounded shadow-lg mr-4">
            {truncateAddress(
              userData.profile.stxAddress.testnet || "No address available"
            )}
          </button>
          <button
            className="bg-white text-black px-4 py-2 rounded shadow-lg"
            onClick={disconnectWallet}
          >
            Disconnect
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
