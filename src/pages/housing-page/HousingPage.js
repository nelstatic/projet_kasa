import Carousel from "../../components/carousel/Carousel.js";
import Logements from "../../data/logements.json";
import { useParams } from "react-router-dom";
import PageError from "../page-error/PageError.js";
import RatingStars from "../../components/rating-stars/RatingStars.js";
import LandlordInfo from "../../components/landlord-info/LandlordInfo.js";
import Collapse from "../../components/collapse/Collapse.js";
import React from "react";

function HousingPage() {
  const { id } = useParams();
  const logement = Logements.find((logement) => logement.id === id);
  //Si aucun logement trouvé, on renvoie la page erreur
  if (!logement) {
    return <PageError />;
  }

  //Construit une liste des équipements d'un logement

  const equipmentList = (
    <ul>
      <React.Fragment>
        {logement.equipments.map((item, index) => (
          <li key={`${item}-${index}`} className="tag">
            {item}
          </li>
        ))}
      </React.Fragment>
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
            <ul>
              <React.Fragment>
                {logement.tags.map((tag, index) => (
                  <li key={`${tag}-${index}`} className="tag">
                    {tag}
                  </li>
                ))}
              </React.Fragment>
            </ul>
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
