import { useState } from "react";
import { BgImages, BgText, BgTitle, MainDiv } from "./styled";
import { HOME_BACKGROUND } from "../../assets/DATA";

export const HomeBackground = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <MainDiv>
      {HOME_BACKGROUND.map((e, i) => (
        <BgImages key={e + i} image={e.background} onMouseOver={()=>setHoveredIndex(i)} onMouseOut={()=>setHoveredIndex(null)} i={i}>
          <BgText>
            <BgTitle selected={i === hoveredIndex && true}>{e.inner}</BgTitle>
          </BgText>
        </BgImages>
      ))}
    </MainDiv>
  );
};
