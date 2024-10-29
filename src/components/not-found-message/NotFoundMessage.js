import { Link } from "react-router-dom";

const NotFoundMessage = () => {
  return (
    <div className="error-message">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe plus.</p>
      <Link to={"/"}>Revenir sur la page d'accueil</Link>
    </div>
  );
};

export default NotFoundMessage;
