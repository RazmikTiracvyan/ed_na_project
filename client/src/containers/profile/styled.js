import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 80px;
  flex-wrap: wrap;
  height: 85vh;
  overflow: hidden;
  align-items: center;
  background-color: #f8f4ec;
  justify-content: space-around;
  @media(max-width:800px){
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    height: 120vh;
    margin-top: 110px;
  }
`;

export const LeftSide = styled.div`
  width: 46%;
  height: 550px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: white;

  @media(max-width:800px){
    width: 95%;
    height: 55vh;
  }
`;

export const RightSide = styled.div`
  width: 46%;
  height: 550px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  @media(max-width:800px){
    width: 95%;
    height: 55vh;
    overflow: hidden;
    }
`;



