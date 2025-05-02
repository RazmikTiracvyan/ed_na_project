import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const BgImages = styled.div`
  width: 25%;
  height: 100vh;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: background-size 0.5s ease;

  @media (max-width: 900px) {
    width: 50%;
    height: 50vh;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 40vh;
  }
`;

export const BgText = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgba(12, 12, 9, 0.7);
  }

  @media (max-width: 900px) {
    height: 50vh;
  }

  @media (max-width: 600px) {
    height: 40vh;
  }
`;

export const BgTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: white;
  transition: opacity 0.5s ease;
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  
  @media (max-width: 900px) {
    font-size: 35px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;
