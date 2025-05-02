import { useEffect, useState } from "react";

import {
  CentralLogo,
  IconSpan,
  LeftSide,
  LineUnderLink,
  Menu,
  MenuItems,
  ResponsiveIcon,
  RightSide,
  ResponsiveIconSpan,
} from "./styled";

import { IoIosMenu } from "react-icons/io";

import { HEADERITEMS } from "../../assets/DATA";

import { useLocation, useNavigate } from "react-router-dom";
import { ResponsiveMenu } from "./responsivepart";

export const Header = ({ isUser, setIsUser }) => {
  const [selected, setSelected] = useState({
    currentPage: null,
    overTime: null,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [openResponsive, setOpenResponsive] = useState(false);

  const location = useLocation();
  const navigate = useNavigate()

  function selectItem(selectedIndex) {
    setSelected((previous) => {
      return { ...previous, overTime: selectedIndex };
    });
  }

  useEffect(() => {
    HEADERITEMS.forEach(
      (e, i) =>
        e.link === location.pathname &&
        setSelected((previous) => {
          return { ...previous, currentPage: i };
        })
    );
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function log_out(inner) {
    if (inner === "Ելք") {
      localStorage.removeItem("token");
      setIsUser(null);
    }
  }

  useEffect(() => {
    if (isUser === null) {
      navigate("/");
    }
  }, [isUser]); 

  return (
    <>
      <Menu location={location.pathname} $isscrolled={isScrolled}>
        <LeftSide>
          {HEADERITEMS.map(
            (e, i) =>
              e.side === "left" && (
                <MenuItems
                  key={e + i}
                  to={e.link}
                  onMouseOver={() => selectItem(i)}
                  onMouseOut={() => selectItem(null)}
                  location={location.pathname}
                  $isscrolled={isScrolled}
                >
                  {e.inner}
                  <LineUnderLink
                    selected={
                      (i === selected.overTime || i === selected.currentPage) &&
                      true
                    }
                    location={location.pathname}
                    $isscrolled={isScrolled}
                  />
                </MenuItems>
              )
          )}
        </LeftSide>
        <CentralLogo></CentralLogo>
        <RightSide>
          {HEADERITEMS.map((e, i) =>
            e.side === "right"
              ? isUser
                ? e.inner !== "Մուտք" && (
                    <MenuItems
                      onClick={() => log_out(e.inner)}
                      key={e + i}
                      to={e.link}
                      onMouseOver={() => selectItem(i)}
                      onMouseOut={() => selectItem(null)}
                      location={location.pathname}
                      $isscrolled={isScrolled}
                    >
                      {e.inner} <IconSpan> {e.icon} </IconSpan>
                      <LineUnderLink
                        selected={
                          (i === selected.overTime ||
                            i === selected.currentPage) &&
                          true
                        }
                        location={location.pathname}
                        $isscrolled={isScrolled}
                      />
                    </MenuItems>
                  )
                : e.inner !== "Ելք" && (
                    <MenuItems
                      key={e + i}
                      to={e.link}
                      onMouseOver={() => selectItem(i)}
                      onMouseOut={() => selectItem(null)}
                      location={location.pathname}
                      $isscrolled={isScrolled}
                    >
                      {e.inner} <IconSpan> {e.icon} </IconSpan>
                      <LineUnderLink
                        selected={
                          (i === selected.overTime ||
                            i === selected.currentPage) &&
                          true
                        }
                        location={location.pathname}
                        $isscrolled={isScrolled}
                      />
                    </MenuItems>
                  )
              : null
          )}
        </RightSide>
        <ResponsiveIcon>
          <ResponsiveIconSpan>
            <IoIosMenu onClick={() => setOpenResponsive((prev) => !prev)} />
          </ResponsiveIconSpan>
        </ResponsiveIcon>
      </Menu>
      <ResponsiveMenu isUser={isUser} $openResponsive={openResponsive} setOpenResponsive={setOpenResponsive} />
    </>
  );
};
