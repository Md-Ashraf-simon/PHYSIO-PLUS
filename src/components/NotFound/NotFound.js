import React from "react";
import notfoundImage from "../../image/404-icons.png";

const NotFound = () => {
  return (
    <div className="text-center">
      <img src={notfoundImage} alt="" />
      <h2> page not found</h2>
    </div>
  );
};

export default NotFound;
