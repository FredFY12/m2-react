import React from "react";
const Qualitie = ({ _id, name, color }) => {
  return (
    <span key={_id} className={"badge m-2 bg-" + color}>
      {name}
    </span>
  );
};

export default Qualitie;
