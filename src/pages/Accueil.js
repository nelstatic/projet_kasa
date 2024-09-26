import banniere from "../assets/banniere.png";

function Accueil() {
    return (
      <div className="accueil_section1">
        <img src={banniere} alt="" className="banniere"/>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    );
  }

export default Accueil

/*   const Home = () => {
    return (
      <div>
        <section1 />
        <section2 />
      </div>
    );
  }; */

// 2 composants : image banniere + les cards 