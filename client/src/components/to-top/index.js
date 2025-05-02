import { Iconpart, RoundDiv } from "./styled";
import { FaArrowUp } from "react-icons/fa";

export const ScrolltoTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <RoundDiv onClick={handleScrollToTop}   >
      <Iconpart>
        <FaArrowUp />
      </Iconpart>
    </RoundDiv>
  );
};
