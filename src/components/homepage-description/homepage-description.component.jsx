import React from "react";

import {
  HomepageDescriptionContainer,
  PrimaryDescription,
  SecondaryDescription,
  DescriptionContainer,
} from "./homepage-description.styles";

const HomepageDescription = () => (
  <HomepageDescriptionContainer>
    <DescriptionContainer>
      <PrimaryDescription>
        Hi I'm Jericho, <br />A web developer.
      </PrimaryDescription>
      <SecondaryDescription>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </SecondaryDescription>
    </DescriptionContainer>
  </HomepageDescriptionContainer>
);

export default HomepageDescription;
