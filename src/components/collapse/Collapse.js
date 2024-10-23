import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

// Composant collapse
const Collapse = ({items, title, content}) => {
  // déclaration de l'état pour gérer l'index de la charte active
  const [activeIndex, setActiveIndex] = useState(null);

  // fonction pour ouvrir/fermer une charte
  const handleCollapseClick = (index) => {
    // Si l'index est déjà actif, on le ferme, sinon on l'ouvre
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="collapse">
      {/* je parcours le tableau avec la methode map */}
      {items.map((item, index) => (
        <div key={index} className="collapse-item">
          <div className="collapse-title" onClick={() => handleCollapseClick(index)}>
            {/* si title est une chaîne on l'affiche direct sinon on accède à la clé dans l'objet */}
            <h3>{typeof title === 'string' && item[title] === undefined ? title : item[title]}</h3>
            <IoIosArrowForward className={`collapse-icon ${activeIndex === index ? 'rotate' : ''}`} />
          </div>
          {/* contenu affiché seulement si la charte est active */}
          {activeIndex === index && (
            <div className="collapse-content">
              {/*si jamais on a un tableau on va boucler dessus pour en lister le contenu sinon simple texte*/}
              {Array.isArray(item[content]) ? (
                <ul>
                  {item[content].map((content, i) => (
                    <li key={i}>{content}</li>
                  ))}
                </ul>
              ) : (
                <p>{item[content]}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Collapse;
