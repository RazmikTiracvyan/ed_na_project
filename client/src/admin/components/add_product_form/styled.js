import styled from "styled-components";



export const ModalLoginn = styled.div`
  width: 100%;
  height: 95vh;
  position: fixed;
  z-index: 13;
  top: 50px;
  background-color: #00000042;
  display: flex;
  align-items: center;
`;

export const MainModal = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  left: 400px;


  @media (max-width: 500px) {
    width: 320px;
    height: 200px;
  }
`;

export const TopTitle = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  font-size: 21px;
  font-weight: bold;
  @media (max-width: 500px) {
    padding-left: 10px;
  }
`;

export const FlexedDiv = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  overflow-y: scroll;
`;

export const InputToType = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid silver;
  outline: none;
  padding-left: 10px;
`;

export const SelectPart = styled.select`
  width: 90%;
  height: 40px;
  border: 1px solid silver;
  outline: none;
  border-radius: 5px;
`;

export const Options = styled.option``;

export const InstallImageDiv = styled.div`
  width: 90%;
  height: 40px;
  border: 1px solid silver;
  outline: none;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const InputFile = styled.input`
  width: 100%;
  height: 40px;
  position: absolute;
  border-radius: 5px;
  opacity: 0;
`;

export const FinalButton = styled.button`
  width: 90%;
  height: 40px;
  background-color: #2196f3;
  border: none;
  outline: none;
  color:white;
  border-radius: 5px;
  cursor: pointer;
`;

export const CloseX = styled.div`
  width: 30px;
  height: 30px;
  font-weight: bold;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 30px;
  cursor: pointer;
`;
