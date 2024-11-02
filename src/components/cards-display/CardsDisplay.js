import { Link } from "react-router-dom";
import Logements from "../../data/logements.json";
import Card from "../card/Card";

const CardsDisplay = () => {
  return (
    <div className="cards-display">
      {Logements.map((Logement) => (
        <Link to={`/logement/${Logement.id}`} key={Logement.id}>
          <Card cover={Logement.cover} title={Logement.title} />
        </Link>
      ))}
    </div>
  );
};

export default CardsDisplay;
