import React from "react";
import Location from "../Location/Location";
import Services from "../Services/Services";
import Banner from "./banner/Banner";
import Facilities from "./Facilities/Facilities";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Facilities></Facilities>
      <Services> </Services>
      <Location></Location>
    </div>
  );
};

export default Home;
