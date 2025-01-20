import { useState, useEffect } from "react";
import eventsData from "../db/eventos.json";

const EventosAstronomicosComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Obtener el mes actual
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString("default", {
      month: "long",
    });
    setCurrentMonth(currentMonth);

    // Filtrar eventos del mes actual
    const filteredEvents = eventsData.filter(
      (event) => event.month === currentMonth
    );
    setEvents(filteredEvents);
  }, []);

  return (
    <section id="eventos" className="bg-black text-white py-16">
      <h2 className="text-4xl text-center mb-8">
        Eventos Astronómicos - {currentMonth}
      </h2>
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-80 rounded-xl"></div>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-xl mb-4 transition duration-500 group-hover:scale-110"
              />
              <h3 className="text-2xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-400">
                {event.date} - {event.time}
              </p>
              <p className="text-base mt-2">{event.description}</p>
              <p className="mt-4 text-sm text-gray-300">
                Ubicación: {event.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventosAstronomicos;
