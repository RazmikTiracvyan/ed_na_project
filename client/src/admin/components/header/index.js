import { MainDiv, TitleHeader } from "./styled";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/admin-ed-na" && (
        <MainDiv>
          <TitleHeader>Welcome to admin panel</TitleHeader>
        </MainDiv>
      )}
    </>
  );
};
