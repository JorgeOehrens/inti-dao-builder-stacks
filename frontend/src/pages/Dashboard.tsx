import Layout from "../components/layout/Layout";

const Dashboard = () => {
  const proposals = [
    {
      id: "INTI-001",
      title: "Community Funding Initiative",
      description: "Allocate funds for local community growth and education.",
      approval: 90,
      status: "Executed",
      publishedBy: "0x1a3...d45",
    },
    {
      id: "INTI-002",
      title: "Infrastructure Upgrade",
      description: "Upgrade core infrastructure for better scalability.",
      approval: 75,
      status: "Pending",
      publishedBy: "0xabc...456",
    },
    {
      id: "INTI-003",
      title: "Developer Hackathon Grants",
      description: "Fund grants for developer hackathons.",
      approval: 82,
      status: "Executed",
      publishedBy: "0x789...123",
    },
  ];

  return (
    <Layout>
      <div className="dashboard-content p-6 bg-gray-50 min-h-screen flex flex-col items-center">
        {/* Header Section */}
        <div
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl flex justify-between items-start mb-6"
          style={{ boxShadow: "0px 4px 8px var(--color-shadow)" }}
        >
          <div className="w-4/5">
            <h1 className="text-3xl font-bold text-gray-800">
              Inti DAO Community Treasury
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              The Inti DAO Community Treasury supports initiatives that empower
              our local and global communities by funding impactful projects.
            </p>
            <p className="text-sm mt-2 text-gray-500">November 2024 · Stacks Blockchain</p>
          </div>
          <div className="w-1/5 flex flex-col items-center">
            <img
              src="https://hackaton-stacks.vercel.app/assets/INTI_logo-CIvTbMq6.svg" /* Ruta de la imagen del DAO */
              alt="DAO Logo"
              className="w-16 h-16 rounded-full mb-2"
            />
            <button
              className="px-4 py-2 text-white rounded-md hover:bg-red-600"
              style={{ backgroundColor: "var(--color-button)" }}
            >
              Follow
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Proposals Section */}
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            style={{ boxShadow: "0px 4px 8px var(--color-shadow)" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Proposals</h2>
              <button
                className="px-4 py-2 text-white rounded-md hover:bg-red-600"
                style={{ backgroundColor: "var(--color-button)" }}
              >
                New Proposal
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {proposals.length} Proposals created
            </p>
            <div className="space-y-4">
              {proposals.map((proposal) => (
                <div
                  key={proposal.id}
                  className="border rounded-md p-4 bg-gray-50 hover:shadow-lg transition"
                  style={{
                    borderColor: "var(--color-sidebar-border)",
                    boxShadow: "0px 4px 8px var(--color-shadow)",
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-md font-semibold text-gray-800">
                        {proposal.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {proposal.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Published by{" "}
                        <span className="font-bold text-red-500">
                          {proposal.publishedBy}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-sm font-medium ${
                          proposal.status === "Executed"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {proposal.status}
                      </p>
                      <p className="text-xs text-gray-500">
                        Approval: {proposal.approval}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Treasury Section */}
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            style={{ boxShadow: "0px 4px 8px var(--color-shadow)" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Treasury Value</h2>
              <button
                className="px-4 py-2 text-white rounded-md hover:bg-red-600"
                style={{ backgroundColor: "var(--color-button)" }}
              >
                New Transfer
              </button>
            </div>
            <p className="text-3xl font-bold text-gray-800 mb-6">
              125,000 STX
            </p>
            <div className="space-y-4">
              <div
                className="border rounded-md p-4 bg-gray-50"
                style={{
                  borderColor: "var(--color-sidebar-border)",
                  boxShadow: "0px 4px 8px var(--color-shadow)",
                }}
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      + 15,000 STX
                    </p>
                    <p className="text-sm text-gray-600">
                      Funding for local outreach.
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">last Friday at 4:20 PM</p>
                </div>
              </div>
              <div
                className="border rounded-md p-4 bg-gray-50"
                style={{
                  borderColor: "var(--color-sidebar-border)",
                  boxShadow: "0px 4px 8px var(--color-shadow)",
                }}
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      + 30,000 STX
                    </p>
                    <p className="text-sm text-gray-600">
                      Maintenance funding.
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    last Wednesday at 10:15 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
