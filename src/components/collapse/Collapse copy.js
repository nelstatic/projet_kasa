import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Collapse = ({ title, content }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCollapseClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="collapse">
      <div key={index} className="collapse-item">
        <div
          className="collapse-title"
          onClick={() => handleCollapseClick(index)}
        >
          <h3>{title}</h3>
          <IoIosArrowForward
            className={`collapse-icon ${activeIndex === index ? "rotate" : ""}`}
          />
        </div>
        <div className="collapse-content"></div>
      </div>
    </div>
  );
};

export default Collapse;
