import banniere_2 from "../../assets/banniere_2.png";
import Collapse from "../../components/collapse/Collapse.js";
import Chartes from "../../data/charte.json";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutus_section1">
        <div className="overlay"></div>
        <img src={banniere_2} alt="" className="banniere_2" />
      </div>

      <div className="aboutus_section2">
        {Chartes.map((charte, index) => (
          <Collapse key={index} title={charte.title} content={charte.content} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
