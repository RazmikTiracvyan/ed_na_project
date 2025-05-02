import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  height: 95vh;
  position: fixed;
  z-index: 13;
  top: 100px;
  background-color: #00000042;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainModal = styled.div`
  width: 500px;
  height: 240px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 320px;
    height: 200px;
  }
`;

export const ImagePart = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-image: url(${({ image }) => image});
  background-size: 100% 100%;
`;

export const MainText = styled.div`
  width: 95%;
  height: 80px;
  font-size: 18.5px;
  font-weight: bold;
`;

export const CloseIcon = styled.div`
  align-self: flex-end;
  margin-right: 20px;
  margin-top: 10px;
  font-size: 26px;
  cursor: pointer;
`;
