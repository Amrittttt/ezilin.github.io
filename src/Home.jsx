import React from 'react'
import "animate.css"
import { NavLink } from 'react-router-dom';
import web from "../src/ahh.jpg"

import Common from './Common';



const Home = () => {
  return (
    <div>
         <Common name="Grow your business with" imgsrc={web} visit="/service" btname="Get Started"/>

    </div>
  );
};

export default Home;
