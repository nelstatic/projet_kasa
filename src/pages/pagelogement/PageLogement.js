import Carousel from "../../components/carousel/Carousel.js";
import Logements from "../../data/logements.json";
import { useParams } from "react-router-dom";
import PageError from "../pageerror/PageError.js";
import RatingStars from "../../components/ratingstars/RatingStars.js";
import LandlordInfo from "../../components/landlordinfo/LandlordInfo.js";
import Collapse from "../../components/collapse/Collapse.js";

function PageLogement(){
    const {id} = useParams();
    const logement = Logements.find(logement => logement.id === id);
    if(!logement){ //Si logement n'existe pas aucun id ne sera renvoyé
        return(
            <PageError/>
        );
    }

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
                            <ul><li key={index} className="tag">{tag}</li></ul>
                         ))}
                    </div>
                </div>

                <div className="infos-bloc2">
                    <LandlordInfo picture={logement.host.picture} name={logement.host.name}/>
                    <RatingStars rating={logement.rating} />
                </div>
            </div>

            <div className="infos-collapses">
                <Collapse items={[logement]} title="Description" content="description"/>
                <Collapse items={[logement]} title="Équipments" content="equipments"/>
            </div>
        </div>      
    );
}

export default PageLogement;


