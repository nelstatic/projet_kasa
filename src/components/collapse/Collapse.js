import React, { useState } from 'react';
import Chartes from "../../data/charte.json";


// Composant collapse
const Collapse = () => {
  // déclaration de l'état pour gérer l'index de la charte active
  const [activeIndex, setActiveIndex] = useState(null);

  // fonction pour ouvrir/fermer une charte
  const handleCollapseClick = (index) => {
    // Si l'index est déjà actif, on le ferme, sinon on l'ouvre
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="collapses">
      {/* je parcours le tableau avec la methode map */}
      {Chartes.map((Charte, index) => (
        <div key={index} className="collapse-item">
          <div className="collapse-title" onClick={() => handleCollapseClick(index)}>
            <h3>{Charte.title}</h3>
          </div>
          {/* contenu affiché seulement si la charte est active */}
          {activeIndex === index && (
            <div className="collapse-content">
              <p>{Charte.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Collapse;
