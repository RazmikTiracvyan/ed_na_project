import styled from "styled-components";

export const MainSection = styled.section`
  width: 100%;
  padding: 50px 0;
  background-color: #f8f4ec;
  text-align: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    justify-content: center;
    gap: 20px;
  }
  @media (max-width: 421px) {
    display: none;
  }
  p {
    width: 400px;
    text-align: left;

    @media (max-width: 421px) {
      font-size: 14px;
      height: 125px;
      background-color: rebeccapurple;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const SectionHeading = styled.h2`
  font-size: 40px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  font-family: "Georgia", serif;
  z-index: 2;
  padding-top: 20px;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 50px;
    height: 2px;
    background-color: #000;
  }
`;

export const SignatureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 40px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Signature component styling
export const Signature = styled.div`
  text-align: center;
  font-family: "Georgia", serif;

  img {
    display: block;
    margin: 0 30px;
    width: 110px;
    height: auto;
  }

  p {
    margin-top: 10px;
    font-style: italic;
    font-size: 18px;
    font-weight: 400;
  }
`;

// Chocolate images wrapper
export const ChocolatesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }

  @media (max-width: 559px) {
    height: 400px;
  }
`;

// Individual chocolate component
export const ChocolateItem = styled.div`
  text-align: center;
  img {
    width: 130px;
    height: 110px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #444;
    margin-top: 5px;
  }
`;
