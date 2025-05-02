import {
    ImagePart,
  ProducctsBig,
  ProductDiv,
  ProductName,
  ProductPrice,
  TitleTops,
  TopMain,
} from "./styled";
import {
  BazmociShor,
  ComplectSrbich,
  KanaciKhalat,
  MankakanTeghashor,
} from "../../assets/images";

export const TopProducts = () => {

  const TOP_PRODUCTS = [
    { image: MankakanTeghashor, name: "Մանկական տեսականի", price: "Տեսնել ամբողջը" },
    { image: KanaciKhalat, name: "Լոգանքի պարագաներ", price: "Տեսնել ամբողջը" },
    { image: ComplectSrbich, name: "Սրբիչների տեսականի", price: "Տեսնել ամբողջը" },
    { image: BazmociShor, name: "Բազմոցի շորեր", price: "Տեսնել ամբողջը" },
  ];

  return (
    <TopMain>
      <TitleTops>Որակը և Հարմարավետությունը մեկ վայրում</TitleTops>
      <ProducctsBig>
        {TOP_PRODUCTS.map((e, i) => (
          <ProductDiv key={e + i} i={i} to={'/shop'}>
            <ImagePart image={e.image}/>
            <ProductName>{e.name}</ProductName>
            <ProductPrice>{e.price}</ProductPrice>
          </ProductDiv>
        ))}
      </ProducctsBig>
    </TopMain>
  );
};
