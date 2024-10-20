function CreateCard() {
  return (
    <section className="w-full text-center py-16 bg-gray-100">
      <h3 className="text-3xl text-center text-indigo-600 font-bold mb-6">
        Explore DAOs
      </h3>
      <div className="mt-8 flex flex-col items-center">
        <p className="text-gray-500 mb-4">DAO List will go here...</p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
          Create a New DAO
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Puedes agregar aquí las tarjetas de DAOs */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-semibold text-indigo-600">DAO Name</h4>
          <p className="text-gray-500 mt-2">Short description of the DAO.</p>
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            View Details
          </button>
        </div>
        {/* Repite la tarjeta anterior según sea necesario */}
      </div>
    </section>
  );
}

export default CreateCard;
