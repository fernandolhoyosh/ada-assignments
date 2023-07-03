import { Link } from "react-router-dom";

export function EventCard({event}) {

  const {id, name, poster, prices} = event;

  return (
    <article className="event-card" style={{border:"1px gray solid"}}>
      <h2>{name}</h2>
      <img src={poster} alt={name} style={{width:"300px", height:"300px"}}/>
      {prices.map((price) =>(
        <ul key={price.id}>
          <li><strong>Id: </strong>{price.id}</li>
          <li><strong>Type: </strong>{price.type}</li>
          <li><strong>Price: </strong>{price.price}</li>
        </ul>
      ))}
      <Link to={`/events/${id}`}>
        <button>Details</button>
      </Link>
    </article>
  );

}
