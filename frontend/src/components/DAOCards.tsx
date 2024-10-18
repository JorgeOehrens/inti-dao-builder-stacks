
const daoList = [
  {
    name: 'Polygon Community Treasury',
    description: 'The Polygon Community Treasury is a protocol-funded support DAO aimed at incentivizing and funding ecosystem growth.',
    tags: ['Grant', 'PKT'],
  },
  {
    name: 'AA Multisig',
    description: 'This is an Aragon Association budget wallet on the new AragonOSx chain.',
    tags: ['protocol', 'AAM'],
  },
  {
    name: 'Eagle Ops',
    description: 'Eagle Ops is responsible for maximizing effective coordination and collaboration between different Aragon teams.',
    tags: ['Social', 'EGO'],
  },
  {
    name: 'Libra Governance DAO',
    description: 'Libra Governance DAO manages governance proposals and voting for the decentralized Libra protocol.',
    tags: ['Protocol', 'LBR'],
  },
  {
    name: 'Zenith Ventures',
    description: 'Zenith Ventures pools funds from members to invest in early-stage blockchain projects and startups.',
    tags: ['Investment', 'ZNV'],
  },
  {
    name: 'Crowdfund Nation',
    description: 'Crowdfund Nation is a decentralized platform that distributes grants to projects through community voting.',
    tags: ['Grant', 'CFN'],
  },
  {
    name: 'Arcadia Collectors',
    description: 'Arcadia Collectors is focused on acquiring and managing rare digital art assets and collectibles in the metaverse.',
    tags: ['Collector', 'ARC'],
  },
  {
    name: 'Solstice Society',
    description: 'Solstice Society is a DAO aimed at fostering a community of developers and creatives who work together on open-source projects.',
    tags: ['Social', 'SOL'],
  },
  {
    name: 'CryptoGrowth Grants',
    description: 'CryptoGrowth Grants DAO distributes funds to decentralized projects that accelerate blockchain adoption.',
    tags: ['Grant', 'CGG'],
  },
  {
    name: 'Meta Protocol Governance',
    description: 'Meta Protocol Governance manages governance tokens and protocol upgrades for Meta Protocol.',
    tags: ['Protocol', 'MTP'],
  },
  {
    name: 'Eclipse Capital DAO',
    description: 'Eclipse Capital DAO pools investments for decentralized finance (DeFi) projects and returns yield to its members.',
    tags: ['Investment', 'ECP'],
  },
  {
    name: 'Art Vault Collective',
    description: 'The Art Vault Collective is a DAO that showcases and preserves the most valuable NFTs in the digital art space.',
    tags: ['Collector', 'AVC'],
  },
  {
    name: 'Blockchain Builders Hub',
    description: 'Blockchain Builders Hub is a social DAO for developers working on decentralized technologies and smart contracts.',
    tags: ['Social', 'BBH'],
  }
];

function DAOCards() {
  return (
    <section className="w-full py-16 bg-white">
      <h3 className="text-3xl text-center text-red-600 font-bold">Explore DAOs</h3>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {daoList.map((dao, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <h4 className="text-xl font-semibold text-gray-800">{dao.name}</h4>
            <p className="text-gray-600 mt-2">{dao.description}</p>

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
