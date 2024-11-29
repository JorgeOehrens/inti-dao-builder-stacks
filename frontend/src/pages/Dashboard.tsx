import Layout from "../components/layout/Layout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

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

  const events = [
    {
      title: "Hackathon Launch",
      start: new Date(2024, 10, 30, 10, 0), // 30 de Noviembre, 10:00 AM
      end: new Date(2024, 10, 30, 18, 0), // 30 de Noviembre, 6:00 PM
      description: "Official launch of the developer hackathon.",
    },
    {
      title: "Voting Period Opens",
      start: new Date(2024, 11, 5, 9, 0), // 5 de Diciembre, 9:00 AM
      end: new Date(2024, 11, 5, 17, 0), // 5 de Diciembre, 5:00 PM
      description: "Community voting opens for funding proposals.",
    },
    {
      title: "Treasury Allocation Meeting",
      start: new Date(2024, 11, 15, 13, 0), // 15 de Diciembre, 1:00 PM
      end: new Date(2024, 11, 15, 15, 0), // 15 de Diciembre, 3:00 PM
      description: "Discuss allocation of treasury for Q1 2025.",
    },
  ];

  const localizer = momentLocalizer(moment);

  return (
    <Layout>
      <div className="dashboard-content bg-gray-50 flex flex-col items-center w-full h-full">
        {/* Header Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Inti DAO Community Treasury
              </h1>
              <p className="mt-2 text-gray-600">
                The Inti DAO Community Treasury supports initiatives that
                empower our local and global communities by funding impactful
                projects.
              </p>
              <p className="text-sm mt-2 text-gray-500">November 2024 · Stacks Blockchain</p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <img
                src="/path-to-your-dao-logo.png"
                alt="DAO Logo"
                className="w-16 h-16 rounded-full mr-4"
              />
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Follow
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mt-6">
          {/* Proposals Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Proposals</h2>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                New Proposal
              </button>
            </div>
            <p className="text-gray-600 mb-4">{proposals.length} Proposals created</p>
            <div className="space-y-4">
              {proposals.map((proposal) => (
                <div
                  key={proposal.id}
                  className="border rounded-lg p-4 bg-gray-50 hover:shadow-md transition"
                >
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{proposal.title}</h3>
                      <p className="text-gray-600 text-sm">{proposal.description}</p>
                      <p className="text-gray-500 text-xs mt-2">
                        Published by{" "}
                        <span className="text-red-500 font-bold">
                          {proposal.publishedBy}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-sm font-semibold ${
                          proposal.status === "Executed"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {proposal.status}
                      </p>
                      <p className="text-gray-500 text-xs">Approval: {proposal.approval}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Treasury Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Treasury Value</h2>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                New Transfer
              </button>
            </div>
            <p className="text-3xl font-bold text-gray-800 mb-6">125,000 STX</p>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-medium text-gray-800">+ 15,000 STX</p>
                    <p className="text-gray-600 text-sm">Funding for local outreach.</p>
                  </div>
                  <p className="text-gray-500 text-sm">last Friday at 4:20 PM</p>
                </div>
              </div>
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-medium text-gray-800">+ 30,000 STX</p>
                    <p className="text-gray-600 text-sm">Maintenance funding.</p>
                  </div>
                  <p className="text-gray-500 text-sm">last Wednesday at 10:15 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Road Map Calendar */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl mt-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Road Map</h2>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{
              height: 500,
              backgroundColor: "white",
              borderRadius: "0.75rem",
              padding: "1rem",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            className="calendar-custom"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
