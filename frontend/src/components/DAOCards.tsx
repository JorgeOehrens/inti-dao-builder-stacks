import { useState, useEffect } from "react";
import { StacksTestnet } from "@stacks/network";
import { callReadOnlyFunction, uintCV } from "@stacks/transactions";
import { Link } from "react-router-dom";

function DAOCards() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const network = new StacksTestnet();

    const fetchContractData = async () => {
      let fetchedResults: any[] = [];

      for (let i = 0; i < 2; i++) {
        try {
          const options = {
            contractAddress: "ST1DT3KBGQZXZAQJZ0EDH0PQ2N0QTWC6XW5EQQXHM",
            contractName: "v3DAO",
            functionName: "get-listing",
            functionArgs: [uintCV(i)],
            senderAddress: "STNMSHXM8WZT2DN4SDC1EHTYJY97012YF7CXRZF3",
            network,
          };

          const result = await callReadOnlyFunction(options);

          console.log(result);
          fetchedResults.push(result);
        } catch (error) {
          console.error(`Error fetching data for DAO index ${i}:`, error);
          break; // Rompe el ciclo en caso de error
        }
      }

      setResults(fetchedResults);
      console.log("Resultados obtenidos:", fetchedResults);
    };

    fetchContractData();
  }, []);

  return (
    <section className="w-full py-16 bg-white">
      <h3 className="text-3xl text-center text-red-600 font-bold">
        Explore DAOs
      </h3>

      {results.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {results.map((result, index) => {
            const name = result.value?.data["name-dao"]?.data || "N/A";
            const tokenSymbol =
              result.value?.data["token-symbol"]?.data || "N/A";

            if (name === "N/A") return null;

            return (
              <Link to={`/dashboard/${index}`} key={index}>
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-xl font-semibold text-gray-800">
                    {name}
                  </h4>

                  <p className="text-gray-600 mt-2">{`Name: ${name}`}</p>
                  <p className="text-gray-600 mt-2">{`Token Symbol: ${tokenSymbol}`}</p>
                  <div className="mt-4 flex space-x-2">
                    <span className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                      tag
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500">Fetching DAO data...</p>
      )}
    </section>
  );
}

export default DAOCards;
