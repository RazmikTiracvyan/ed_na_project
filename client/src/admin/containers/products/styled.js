import styled from "styled-components";

export const Div1 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const MainDiv = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`


export const InformationCard = styled.div`
  width: 290px;
  height: 90px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  text-decoration: none;
  margin-left: 20px;
  cursor: pointer;
`;

export const IconPlace = styled.div`
  display: flex;
  align-items: center;
  padding-left: 35px;
  width: 100px;
  height: 90px;
  border-radius: 0 0px 70px 0;
  background-color: #e1effd;
  color: #3366ff;
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
`;

export const Content = styled.div`
  width: 200px;
`;



export const Amount = styled.div`
  font-size: 23px;
  font-weight: bold;
  color: #333;
  text-align: right;
  margin-top: 9px;
  padding-right: 22px;
`;
