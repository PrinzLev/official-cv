import React from "react";

import { HomepageContainer } from "./homepage.styles";

import HomepageDescription from "../../components/homepage-description/homepage-description.component";
import HomepageTechnologies from "../../components/homepage-technologies/homepage-technologies.components";
function Homepage() {
  return (
    <HomepageContainer>
      <HomepageDescription />
      <HomepageTechnologies />
    </HomepageContainer>
  );
}

export default Homepage;
