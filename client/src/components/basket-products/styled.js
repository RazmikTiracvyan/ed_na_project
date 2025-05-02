import styled from "styled-components";

export const ProductDiv = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImagePart = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid;
`;

export const NamePart = styled.div`
  font-weight: bold;
`;

export const PlusMinusZeroPart = styled.div`
  display: flex;
  height: 25px;
`;

export const PlusBtn = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 10px;
  background-color: cornflowerblue;
  color: white;
  cursor: pointer;
  text-align: center;
  padding-top: 3px;
`;

export const ZeroSpan = styled.div`
  width: 20px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PricePart = styled.div``;

export const RemoveItem = styled.div`
  margin-top: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 21px;
`;

export const LineUnder = styled.div`
  width: 95%;
  height: 1px;
  margin: auto;
  background-color: silver;
  margin-top: 30px;
`;

export const DivImage = styled.div`
  width: 15%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivName = styled.div`
  width: 30%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width:500px){
    display: none;
  }
`;

export const PLZM = styled.div`
  width: 15%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width:500px){
    width: 25%;
  }
` 

export const DetDiv = styled.div`
  width: 40%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  padding-left: 10px;
  padding-right: 20px;
  @media(max-width:500px){
    width: 60%;
  }
`
