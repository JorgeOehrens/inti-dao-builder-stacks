import { useEffect, useState } from "react";
import { AppConfig, UserSession } from "@stacks/connect";
import {
  callReadOnlyFunction,
  standardPrincipalCV,
  cvToString,
} from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";

function CreateCard() {
  const appConfig = new AppConfig(["publish_data"]);
  const [currentMessage, setCurrentMessage] = useState("");
  const userSession = new UserSession({ appConfig });
  const [loggedIn, setLoggedIn] = useState(false);
  const network = new StacksTestnet();
  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(() => {
        setLoggedIn(true);
      });
    } else if (userSession.isUserSignedIn()) {
      setLoggedIn(true);
    }
  }, []);

  const readOnlyCall = async () => {
    const assetAddress = "STNMSHXM8WZT2DN4SDC1EHTYJY97012YF7CXRZF3";
    const contractName = "DAOCommunity";
    const functionName = "isUserACommunityMember";

    const functionArgs = [
      standardPrincipalCV(
        userSession.loadUserData().profile.stxAddress.testnet
      ),
    ];

    const options = {
      contractAddress: assetAddress,
      contractName,
      functionName,
      functionArgs,
      network,
      senderAddress: userSession.loadUserData().profile.stxAddress.testnet, // Dirección del usuario actual
    };

    try {
      const result = await callReadOnlyFunction(options);
      const message = cvToString(result);
      setCurrentMessage(message);
      console.log("Read-only result:", message);
    } catch (error) {
      console.error("Error in read-only call:", error);
      setCurrentMessage("Error fetching data.");
    }
  };

  return (
    <section className="w-full text-center py-16 bg-gray-100">
      <h3 className="text-3xl text-center text-indigo-600 font-bold mb-6">
        Explore DAOs
      </h3>
      <div className="mt-8 flex flex-col items-center">
        <p className="text-gray-500 mb-4">DAO List will go here...</p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
          Create a New DAO
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-indigo-600">DAO Name</h4>
          <p className="text-gray-500 mt-2">Short description of the DAO.</p>
          <div className="flex flex-col gap-4 items-center max-w-md w-full">
            <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
              {loggedIn ? (
                <button
                  onClick={readOnlyCall}
                  className="rounded bg-indigo-500 p-4 text-2xl text-white hover:bg-indigo-700"
                >
                  Check Membership
                </button>
              ) : (
                <button className="bg-white-500 mb-6 rounded border-2 border-black py-2 px-4 font-bold hover:bg-gray-300">
                  Connect to Wallet
                </button>
              )}
            </div>
            {currentMessage && (
              <p className="text-indigo-600 mt-4">{currentMessage}</p>
            )}
          </div>
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            View Details
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreateCard;
