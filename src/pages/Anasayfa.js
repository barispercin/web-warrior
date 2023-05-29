import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Merhaba from "../Components/AnasayfaMerhaba";
import Musterilerimiz from "../Components/AnaSayfaMusterilerimiz";
import Planlama from "../Components/AnasayfaPlanlama";
import UygulamaGelistirmeAsamalari from "../Components/AnasayfaUygulamaGelistirmeAsamalari";
import BakimveDestek from "../Components/AnaSayfaBakimveDestek";
import Ekip from "../Components/AnasayfaEkip";
import BuradanBaslayin from "../Components/AnasayfaBuradanBaslayin";
import Footer from "../Components/Footer";

const Anasayfa = () => {
  return (
    <div> 
      <Merhaba></Merhaba>
      <Musterilerimiz></Musterilerimiz>
      <Planlama></Planlama>
      <UygulamaGelistirmeAsamalari></UygulamaGelistirmeAsamalari>
      <BakimveDestek></BakimveDestek>
      <Ekip/>
      <BuradanBaslayin/>
      <Footer/>
      
    </div>
  );
};

export default Anasayfa;
