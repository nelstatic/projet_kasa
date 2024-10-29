import Carousel from "../../components/carousel/Carousel.js";
import Logements from "../../data/logements.json";
import { useParams } from "react-router-dom";
import PageError from "../page-error/PageError.js";
import RatingStars from "../../components/rating-stars/RatingStars.js";
import LandlordInfo from "../../components/landlord-info/LandlordInfo.js";
import Collapse from "../../components/collapse/Collapse.js";

function HousingPage() {
  const { id } = useParams();
  const logement = Logements.find((logement) => logement.id === id);
  if (!logement) {
    //Si logement n'existe pas aucun id ne sera renvoyé
    return <PageError />;
  }

  const equipmentList = (
    // car cette propritété qu'on recup dans un objet du tableau est elle-même un tableau
    <ul>
      {logement.equipments.map((item, index) => (
        <li key={index} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <Carousel slides={logement.pictures} />

      <div className="infos">
        <div className="infos-bloc1">
          <div className="nom-location">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <ul>
                <li key={index} className="tag">
                  {tag}
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="infos-bloc2">
          <LandlordInfo
            picture={logement.host.picture}
            name={logement.host.name}
          />
          <RatingStars rating={logement.rating} />
        </div>
      </div>

      <div className="infos-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipments" content={equipmentList} />
      </div>
    </div>
  );
}

export default HousingPage;
