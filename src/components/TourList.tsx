import React, { useState, useEffect } from "react";
import toursData from "../db/tours.json";

const TourList: React.FC = () => {
  const [tours, setTours] = useState<
    {
      id: number;
      name: string;
      description: string;
      date: string;
      price: number;
      image: string;
      link: string;
    }[]
  >([]);
  const [view, setView] = useState<"upcoming" | "past">("upcoming");

  useEffect(() => {
    const currentDate = new Date();
    const upcomingTours = toursData.filter(
      (tour) => new Date(tour.date) >= currentDate
    );
    const pastTours = toursData.filter(
      (tour) => new Date(tour.date) < currentDate
    );
    setTours(view === "upcoming" ? upcomingTours.slice(0, 3) : pastTours);
  }, [view]);

  const formatPrice = (price: number) =>
    price.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    });

  return (
    <div className="min-h-screen  text-white py-12 px-6">
      {/* Botones de filtro */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setView("upcoming")}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            view === "upcoming"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
              : "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
          }`}
        >
          Tours Próximos
        </button>
        <button
          onClick={() => setView("past")}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            view === "past"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
              : "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
          }`}
        >
          Tours Pasados
        </button>
      </div>

      {/* Lista de tours */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="relative bg-gray-100 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <a href={tour.link} target="_blank" rel="noopener noreferrer">
              <img
                src={tour.image}
                alt={tour.name}
                className="rounded-t-xl w-full h-48 object-cover"
              />
            </a>
            <div className="p-6">
              <a href={tour.link} target="_blank" rel="noopener noreferrer">
                <h5 className="text-2xl font-bold text-blue-400 mb-3 hover:underline">
                  {tour.name}
                </h5>
              </a>
              <p className="text-gray-700 text-sm mb-4">{tour.description}</p>
              <div className="flex justify-between items-center text-gray-500">
                <span className="text-sm">
                  📅 {new Date(tour.date).toLocaleDateString()}
                </span>
                <span className="font-semibold text-lg text-blue-400">
                  {formatPrice(tour.price)}
                </span>
              </div>
              <a
                href={tour.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300"
              >
                Reservar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourList;
