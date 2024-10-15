import Carousel from "../../components/carousel/Carousel.js";
import Logements from "../../data/logements.json";
import { useParams } from "react-router-dom";

function PageLogement()  {
    const {id} = useParams();
    const Logement = Logements.find(Logement => Logement.id === id);

    console.log(Logement); 

    return (
        <div>
            <Carousel slides={Logement.pictures} />
            <h1>{Logement.title}</h1>
            <p>{Logement.location}</p>
            <div className="tags">
                {Logement.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
                 ))}
            </div>
        </div>      
    );
}

export default PageLogement;


