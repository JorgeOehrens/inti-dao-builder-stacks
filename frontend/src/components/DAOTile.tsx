import React from 'react';

function DAOTile({ dao }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800">{dao.name}</h3>
      <p className="text-gray-600 mt-2">{dao.description}</p>
      <div className="mt-4 flex gap-2">
        {dao.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DAOTile;