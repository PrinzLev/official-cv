import React from "react";

import background from "./images/background/brushstroke-white.png";

import { TechnologiesBackgroundImage } from "./technologies-background.styles";

import { default as technologies } from "./technologies.data";

const TechnologiesBackground = () => (
  <div>
    <TechnologiesBackgroundImage src={background} />
    {/* {
        technologies.map({name, imageUrl, } => )
    } */}
  </div>
);

export default TechnologiesBackground;
