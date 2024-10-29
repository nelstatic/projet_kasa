import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // fonction pour ouvrir/fermer le collapse
  const handleCollapseClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-item">
        <div className="collapse-title" onClick={handleCollapseClick}>
          <h3>{title}</h3>
          <IoIosArrowForward
            className={`collapse-icon ${isOpen ? "rotate" : ""}`}
          />
        </div>
        {isOpen && (
          <div className="collapse-content">
            {/* Affiche directement le contenu passé en prop */}
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
