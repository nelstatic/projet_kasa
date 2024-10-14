import Logements from "../../data/logements.json";
import Card from '../card/Card';

const CardsDisplay=()=>{

    return(
        <div className='cards-display'>
            {
                Logements.slice(0, 6).map(Logement=>(
                    <Card key={Logement.id} cover={Logement.cover} title={Logement.title}/>
                ))
            }
        </div>
    );
};

export default CardsDisplay;