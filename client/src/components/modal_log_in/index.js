import {
  ModalLoginn,
  MainModal,
  TopTitle,
  InfoText,
  LogInLink,
  LogInButton,
} from "./styled";

export const ModalLogin = () => {
  return (
    <ModalLoginn>
      <MainModal>
        <TopTitle>Բարի գալուստ հարգելի օգտատեր:</TopTitle>
        <InfoText>
          Խնդրում ենք մուտք գործել կամ գրանցվել՝ զամբյուղն օգտագործելու
          թույլտվություն ստանալու և գնումներ կատարելու համար
        </InfoText>
        <LogInLink to={"/signin"}>
          <LogInButton>Մուտք</LogInButton>
        </LogInLink>
      </MainModal>
    </ModalLoginn>
  );
};
