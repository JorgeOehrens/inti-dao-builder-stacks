import Layout from "../components/layout/Layout";
import "../styles/globals.css"

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Bienvenido al panel principal.</p>
        {/* Aquí va el contenido del Dashboard */}
      </div>
    </Layout>
  );
};

export default Dashboard;
