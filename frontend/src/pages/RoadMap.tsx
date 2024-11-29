import Layout from "../components/layout/Layout";

type Status = "Completo" | "En Progreso" | "Pendiente";

type RoadmapEvent = {
    title: string;
    startDate: string;
    endDate: string;
    rewards: string;
    description: string;
    status: Status;
  };
  const RoadMap = () => {
    const roadmapEvents: RoadmapEvent[] = [
        {
      title: "Creación de DAO en Stacks y Tokens de Gobernanza",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      rewards: "10,000 STX",
      description:
        "Establecimiento de la DAO y distribución de tokens de gobernanza para los miembros fundadores.",
      status: "Completo",
    },
    {
      title: "Almacenamiento de Archivos en ICP",
      startDate: "2024-03-01",
      endDate: "2024-04-10",
      rewards: "15,000 STX",
      description:
        "Implementación de almacenamiento descentralizado utilizando ICP para respaldar los documentos de la DAO.",
      status: "En Progreso",
    },
    {
      title: "Implementación del Sistema de Arbitraje",
      startDate: "2024-05-01",
      endDate: "2024-06-15",
      rewards: "20,000 STX",
      description:
        "Desarrollo e integración de un sistema de resolución de disputas en la DAO.",
      status: "Pendiente",
    },
    // Agrega más eventos si es necesario
  ];

  const getStatusStyles = (status: Status) => {
    switch (status) {
      case "Completo":
        return "bg-green-100 text-green-600 border-green-500";
      case "En Progreso":
        return "bg-yellow-100 text-yellow-600 border-yellow-500";
      case "Pendiente":
        return "bg-gray-100 text-gray-600 border-gray-500";
      default:
        return "bg-gray-100 text-gray-600 border-gray-500";
    }
  };

  return (
    <Layout>
      <div className="dashboard-content bg-gray-50 flex flex-col items-center w-full h-full py-6 px-4">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Roadmap Histórico</h1>
          <p className="text-gray-600 mt-2">
            Una línea de tiempo de los eventos clave en la DAO, incluyendo fechas, recompensas y logros alcanzados.
          </p>
        </div>
        <div className="timeline w-full max-w-5xl space-y-6">
          {roadmapEvents.map((event, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start md:items-center justify-between bg-white border rounded-lg shadow-md p-6 ${getStatusStyles(
                event.status
              )}`}
            >
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{event.description}</p>
              </div>
              <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
                <p className="text-sm font-medium text-gray-500">Inicio:</p>
                <p className="text-lg font-bold text-gray-800">{event.startDate}</p>
                <p className="text-sm font-medium text-gray-500 mt-2">Finalización:</p>
                <p className="text-lg font-bold text-gray-800">{event.endDate}</p>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-center md:items-end">
                <p className="text-sm text-gray-500 mb-2">Recompensa:</p>
                <p className="text-lg font-bold text-red-600">{event.rewards}</p>
                <div
                  className={`mt-4 px-4 py-2 rounded-full border text-sm font-medium ${getStatusStyles(
                    event.status
                  )}`}
                >
                  {event.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RoadMap;
