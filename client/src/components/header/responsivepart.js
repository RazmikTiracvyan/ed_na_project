import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  IconSpan,
  LineUnderLink,
  MenuItems,
  ResItems,
  ResponsiveMain,
} from "./styled";

import { HEADERITEMS } from "../../assets/DATA";

export const ResponsiveMenu = ({
  $openResponsive,
  setOpenResponsive,
  isUser,
}) => {
  const [selected, setSelected] = useState({
    currentPage: null,
    overTime: null,
  });

  const location = useLocation();

  useEffect(() => {
    HEADERITEMS.forEach(
      (e, i) =>
        e.link === location.pathname &&
        setSelected((previous) => {
          return { ...previous, currentPage: i };
        })
    );
    setOpenResponsive(false);
  }, [location.pathname]);

  return (
    <ResponsiveMain $openResponsive={$openResponsive}>
      {HEADERITEMS.map((e, i) =>
        isUser
          ? e.inner !== "Մուտք" && (
              <ResItems key={e + i}>
                <MenuItems to={e.link}>
                  {e.inner} <IconSpan>{e.icon}</IconSpan>
                  <LineUnderLink
                    selected={i === selected.currentPage && true}
                  />
                </MenuItems>
              </ResItems>
            )
          : e.inner !== "Ելք" && (
              <ResItems key={e + i}>
                <MenuItems to={e.link}>
                  {e.inner} <IconSpan>{e.icon}</IconSpan>
                  <LineUnderLink
                    selected={i === selected.currentPage && true}
                  />
                </MenuItems>
              </ResItems>
            )
      )}
    </ResponsiveMain>
  );
};
