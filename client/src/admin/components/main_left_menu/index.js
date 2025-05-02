import { useLocation } from "react-router-dom";

import { MENU_ITEMS } from "../../assets/DATA";

import { LeftSide, MenuLink } from "./styled";

export const LeftMenu = () => {
  const location = useLocation();

  return (
    <LeftSide>
      {MENU_ITEMS.map((e, i) => (
        <MenuLink $isActive={`/admin-ed-na/${e.link}` === location.pathname} to={e.link && `/admin-ed-na/${e.link}`} key={e + i}>{e.inner}</MenuLink>
      ))}
    </LeftSide>
  );
};
