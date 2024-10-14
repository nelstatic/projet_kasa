import banniere_2 from "../../assets/banniere_2.png";
import Collapse from "../../components/collapse/Collapse.js";


const AboutUs=()=> {
  return (
      <div className="aboutus">
          <div className="aboutus_section1">
            <div className="overlay"></div>
            <img src={banniere_2} alt="" className="banniere_2"/>
          </div>

          <div className="aboutus_section2">
            <Collapse/>
          </div>
      </div>
  );
}

export default AboutUs;