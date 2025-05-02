import {
  MainSection,
  SectionHeading,
  TextWrapper,
  Signature,
  SignatureWrapper,
  ChocolatesWrapper,
  ChocolateItem,
} from "./styled";

import {
  SignatureImg,
  PillowPng,
  Tabletcloth,
  TowlPng,
  BeddingPng,
  Signature2Img
} from "../../assets/images";

export const HomeAbout = () => (
  <MainSection>
    <SectionHeading>Մեր մասին</SectionHeading>
    <TextWrapper>
      <p>
        Էդ-Նա - հարսանեկան օժիտի խանութը Էջմիածին քաղաքում: Էդ-Նա-ն առաջարկում է
        բարձրորակ և նորաձև ապրանքներ՝ հարմարավետության և ոճի սիրահարների համար:
        Մեզ մոտ կգտնեք ամեն ինչ՝ տան դեկորացիայի համար՝ վարագույրներ, բարձեր,
        սեղանի ծածկոցներ, անկողնային պարագաներ և շատ ավելին:
      </p>
      <p>
        Էդ-Նա-ն միշտ ձգտում է բավարարել իր հաճախորդների պահանջները՝ ապահովելով
        լայն տեսականի, մատչելի գներ և բարձրորակ սպասարկում: Այցելեք մեզ և գտնեք
        այն, ինչ փնտրում եք՝ ձեր տան համար: Մեր նպատակն է առաջարկել այնպիսի
        ապրանքներ, որոնք կբերեն ջերմություն և ուրախություն ձեր ընտանիքին:
      </p>
    </TextWrapper>
    <SignatureWrapper>
      <Signature>
        <img src={SignatureImg} alt="Signature 1" />
        <p>N.Tiratsvyan</p>
      </Signature>
      <Signature>
        <img src={Signature2Img} alt="Signature 1" />
        <p>E.Karapetyan</p>
      </Signature>
    </SignatureWrapper>
    <ChocolatesWrapper>
      <ChocolateItem>
        <img src={PillowPng} alt="Chocolate 1" />
        <p>Բարձեր</p>
      </ChocolateItem>
      <ChocolateItem>
        <img src={Tabletcloth} alt="Chocolate 2" />
        <p>Սփռոցներ</p>
      </ChocolateItem>
      <ChocolateItem>
        <img src={TowlPng} alt="Chocolate 3" />
        <p>Սրբիչներ</p>
      </ChocolateItem>
      <ChocolateItem>
        <img src={BeddingPng} alt="Chocolate 4" />
        <p>Անկողնային</p>
      </ChocolateItem>
    </ChocolatesWrapper>
  </MainSection>
);
