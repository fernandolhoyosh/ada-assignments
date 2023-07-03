import { useState, useEffect } from "react";
import { getEvents } from "../services/eventsService";
import { EventCard } from "../components/EventCard";

export function EventListPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getEvents().then((response) => setData(response));
  }, []);

  /* console.log(data); */

  return (
    <main>
      <h1>Event list</h1>
      <div className="container-events">
        {data.map((event) => (
          <EventCard key={event.id} event ={event}/>
        ))}
      </div>
    </main>
  );
}
