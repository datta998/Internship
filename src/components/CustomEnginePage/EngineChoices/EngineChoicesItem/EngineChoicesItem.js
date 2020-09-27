import React from "react";

export const EngineChoicesItem = ({
  kwh,
  type,
  range,
  price,
  className,
  onClick
}) => {
  return (
    <div
      className={`EngineChoicesItem ${className ? className : ""}`}
      onClick={onClick}
    >
      <div className="type">
        {kwh} <span>{type}</span>
      </div>
      <div className="kwh">{kwh} kwh</div>
      <div className="range">{range} miles range</div>
      <div className="indicator" />
     
    </div>
  );
};

export default EngineChoicesItem;
