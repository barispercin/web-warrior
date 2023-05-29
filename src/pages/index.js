import React from "react";
import Navbar from "./NavBar";
import Anasayfa from "./Anasayfa";
import 'bootstrap/dist/css/bootstrap.min.css';
const index = () => {
  return (
    <div>
      <Navbar />
      
      <Anasayfa></Anasayfa>
        
    </div>
  );
};

export default index;
