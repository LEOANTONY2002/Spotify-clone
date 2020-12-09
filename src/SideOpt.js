import React from "react";
import "./SideOpt.css";

function SideOpt({ title, Icon }) {
  return (
    <div className="opt">
      {Icon && <Icon className="opt_icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SideOpt;
