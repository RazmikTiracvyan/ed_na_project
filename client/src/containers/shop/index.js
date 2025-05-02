import { useParams } from "react-router-dom";

import {
  AppartementsDiv,
  Appartment,
  MainDiv,
  BackgroundContact,
  BgColor,
  DecorTitle,
} from "./styled";

import { FilteredShop, Products } from "../../components";

import { SHOP_APPARTMENTS } from "../../assets/DATA";

export const Shop = () => {
  const params = useParams();


  return (
    <MainDiv>
      <BackgroundContact>
        <BgColor>
          <DecorTitle>Ամբողջ տեսականին</DecorTitle>
        </BgColor>
      </BackgroundContact>
      <AppartementsDiv>
        {SHOP_APPARTMENTS.map((e, i) => (
          <Appartment to={`/shop/${e.link}`} key={e + i}>
            {e.inner}
          </Appartment>
        ))}
      </AppartementsDiv>
      {params?.type ? <FilteredShop type={params.type} /> : <Products />}
    </MainDiv>
  );
};
