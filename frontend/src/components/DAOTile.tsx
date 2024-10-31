// DAOTile.js
import { Link } from "react-router-dom";

const DAOTile = ({ dao }) => {
  return (
    <Link to="/dao/mountain-adventure" className="dao-tile-link">
      <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
        <h3 className="text-2xl font-semibold mb-2">{dao.name}</h3>
        <p className="text-gray-700 mb-4">{dao.description}</p>
        <div className="flex flex-wrap gap-2">
          {dao.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default DAOTile;
