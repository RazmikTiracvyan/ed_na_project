import { FaRegCircleUser } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";



export const HEADERITEMS = [
  { inner: "Գլխավոր", link: "/", side: "left" },
  { inner: "Տեսականի", link: "/shop", side: "left" },
  { inner: "Կապ", link: "/contact", side: "left" },
  { inner: "Զամբյուղ", link: "/profile", side: "right" },
  { inner: "Ելք", side: "right", icon:<FiLogOut/> },
  { inner: "Մուտք", link: "/signin", icon: <FaRegCircleUser/>, side: "right" },
];
