import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StacksTestnet } from "@stacks/network";
import { callReadOnlyFunction, uintCV } from "@stacks/transactions";
import styles from "./DAOFeed.module.css";

const DAOFeed: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const network = new StacksTestnet();

    const fetchContractData = async () => {
      let fetchedResults: any[] = [];

      for (let i = 0; i < 2; i++) {
        // Ajusta el límite según la cantidad de DAOs que quieras mostrar
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
          if (result) {
            fetchedResults.push(result);
          } else {
            break; // Rompe el ciclo si no hay resultados
          }
        } catch (error) {
          console.error(`Error fetching data for DAO index ${i}:`, error);
          break;
        }
      }

      setResults(fetchedResults);
      console.log("Resultados obtenidos:", fetchedResults);
    };

    fetchContractData();
  }, []);

  return (
    <div className={styles.daoFeedContainer}>
      <h1>DAO Feed</h1>
      <div className={styles.daoGrid}>
        {results.length > 0 ? (
          results.map((result, index) => {
            const name = result.value?.data["name-dao"]?.data || "N/A";
            const description =
              result.value?.data["description"]?.data ||
              "No description available";
            const members = result.value?.data["members"]?.data || "N/A";

            if (name === "N/A") return null;

            return (
              <Link
                to={`/dashboard/${index}`}
                key={index}

                className={styles.daoTile}
              >
                <h2>{name}</h2>
                <p>{description}</p>
                <span>Members: {members}</span>
              </Link>
            );
          })
        ) : (
          <p className="text-gray-500">Fetching DAO data...</p>
        )}
      </div>
    </div>
  );
};

export default DAOFeed;
