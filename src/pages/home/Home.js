import banniere from "../../assets/banniere.png";
import CardsDisplay from "../../components/cardsdisplay/CardsDisplay";

function Home() {
    return (
      <div>
        <div className="home_section1">
          <div className="overlay"></div>
          <img src={banniere} alt="" className="banniere"/>
          <p>Chez vous, partout et ailleurs</p>
        </div>

        <CardsDisplay/>
      </div>
    );
  }

export default Home

/*   const Home = () => {
    return (
      <div>
        <section1 />
        <section2 />
      </div>
    );
  }; */

// 2 composants : image banniere + les cards 