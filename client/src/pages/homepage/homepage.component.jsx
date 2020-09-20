import React from "react";
//Styles
import { HomePageContainer } from "./homepage.styles";
// import "./homepage.style.scss";
//Components
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
