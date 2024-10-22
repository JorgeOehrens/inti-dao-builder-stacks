import { useEffect, useState } from "react";
import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { UserData } from "@stacks/auth";

// Import additional components
import Header from "../components/Header";
import Hero from "../components/Hero";
import DAOCards from "../components/DAOCards";
import Footer from "../components/Footer";

function App() {
  const [userData, setUserData] = useState<UserData | undefined>(undefined);

  const appConfig = new AppConfig(["store_write"]);
  const userSession = new UserSession({ appConfig });
  const appDetails = {
    name: "Hello Stacks",
    icon: "https://freesvg.org/img/1541103084.png",
  };

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData: any) => {
        setUserData(userData);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, []);

  const connectWallet = () => {
    showConnect({
      appDetails,
      onFinish: () => window.location.reload(),
      userSession,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
    {/* Your Header and other sections */}
    <Header />
    <Hero />
    <DAOCards />

    {/* Flexbox will push the footer to the bottom */}
    <Footer />
  </div>
);
}

export default App;