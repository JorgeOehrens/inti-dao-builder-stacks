import { useState, useEffect } from "react";
import { StacksTestnet } from "@stacks/network";
import { callReadOnlyFunction, uintCV } from "@stacks/transactions";

const daoList = [
  {
    name: 'Polygon Community Treasury',
    description: 'The Polygon Community Treasury is a protocol-funded support DAO aimed at incentivizing and funding ecosystem growth.',
    tags: ['Grant', 'PKT'],
    logo: 'https://img.logoipsum.com/298.svg' // Replace with actual URL or local path
  },
  {
    name: 'AA Multisig',
    description: 'This is an Aragon Association budget wallet on the new AragonOSx chain.',
    tags: ['protocol', 'AAM'],
    logo: 'https://img.logoipsum.com/299.svg'
  },
  {
    name: 'Eagle Ops',
    description: 'Eagle Ops is responsible for maximizing effective coordination and collaboration between different Aragon teams.',
    tags: ['Social', 'EGO'],
    logo: 'https://img.logoipsum.com/296.svg'
  },
  {
    name: 'Libra Governance DAO',
    description: 'Libra Governance DAO manages governance proposals and voting for the decentralized Libra protocol.',
    tags: ['Protocol', 'LBR'],
    logo: 'https://img.logoipsum.com/292.svg'
  },
  {
    name: 'Zenith Ventures',
    description: 'Zenith Ventures pools funds from members to invest in early-stage blockchain projects and startups.',
    tags: ['Investment', 'ZNV'],
    logo: 'https://img.logoipsum.com/282.svg'

  },

  {
    name: 'Crowdfund Nation',
    description: 'Crowdfund Nation is a decentralized platform that distributes grants to projects through community voting.',
    tags: ['Grant', 'CFN'],
    logo: 'https://img.logoipsum.com/278.svg'
  },
  {
    name: 'Arcadia Collectors',
    description: 'Arcadia Collectors is focused on acquiring and managing rare digital art assets and collectibles in the metaverse.',
    tags: ['Collector', 'ARC'],
    logo: 'https://img.logoipsum.com/271.svg'
  },
  {
    name: 'Solstice Society',
    description: 'Solstice Society is a DAO aimed at fostering a community of developers and creatives who work together on open-source projects.',
    tags: ['Social', 'SOL'],
    logo: 'https://img.logoipsum.com/268.svg'
  },
  {
    name: 'CryptoGrowth Grants',
    description: 'CryptoGrowth Grants DAO distributes funds to decentralized projects that accelerate blockchain adoption.',
    tags: ['Grant', 'CGG'],
    logo: 'https://img.logoipsum.com/249.svg'
  },
  {
    name: 'Meta Protocol Governance',
    description: 'Meta Protocol Governance manages governance tokens and protocol upgrades for Meta Protocol.',
    tags: ['Protocol', 'MTP'],
    logo: 'https://img.logoipsum.com/248.svg'
  },
  {
    name: 'Eclipse Capital DAO',
    description: 'Eclipse Capital DAO pools investments for decentralized finance (DeFi) projects and returns yield to its members.',
    tags: ['Investment', 'ECP'],
    logo: 'https://img.logoipsum.com/247.svg'
  },
  {
    name: 'Art Vault Collective',
    description: 'The Art Vault Collective is a DAO that showcases and preserves the most valuable NFTs in the digital art space.',
    tags: ['Collector', 'AVC'],
    logo: 'https://img.logoipsum.com/231.svg'
  },
  {
    name: 'Blockchain Builders Hub',
    description: 'Blockchain Builders Hub is a social DAO for developers working on decentralized technologies and smart contracts.',
    tags: ['Social', 'BBH'],
    logo: 'https://img.logoipsum.com/224.svg'
  }


];

function DAOCards() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const network = new StacksTestnet();

    const fetchContractData = async () => {
      let fetchedResults: any[] = [];

      for (let i = 0; i < 10; i++) {
        try {
          const options = {
            contractAddress: "STNMSHXM8WZT2DN4SDC1EHTYJY97012YF7CXRZF3",
            contractName: "TestFactoryDAO",
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
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-800">{name}</h4>

                <p className="text-gray-600 mt-2">{`Name: ${name}`}</p>
                <p className="text-gray-600 mt-2">{`Token Symbol: ${tokenSymbol}`}</p>
                <div className="mt-4 flex space-x-2">
                  <span className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                    tag
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500">Fetching DAO data...</p>
      )}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {daoList.slice(0, 4).map((dao, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            {/* Profile Picture */}
            <div className="flex justify-center mb-4">
              <img 
                src={dao.logo} 
                alt={`${dao.name} Logo`} 
                className="w-16 h-16 rounded-full object-cover" 
              />
            </div>

            {/* DAO Info */}
            <h4 className="text-xl font-semibold text-gray-800">{dao.name}</h4>
            <p className="text-gray-600 mt-2">{dao.description}</p>

            {/* Tags */}
            <div className="mt-4 flex space-x-2">
              {dao.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
          Show more
        </button>
      </div>
    </section>
  );
}

export default DAOCards;
