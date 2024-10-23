import { Link } from "react-router-dom";

const NotFoundMessage=()=>{
    return(
        <div>
            <h1>Erreur 404</h1>
            <Link to={"/"}>Retour accueil</Link>
        </div>
    );
}

export default NotFoundMessage;