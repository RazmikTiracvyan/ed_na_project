import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  @media (max-width:800px){
    padding-bottom: 0;
    overflow: hidden;
  }
`;

export const FormTitle = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 25px;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:800px){
    padding-bottom: 0;
  }
`;

export const CredentialInput = styled.input`
  width: 90%;
  height: 45px;
  border: 1px solid silver;
  outline: none;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 16px;
  margin-top: 20px;
  background-color: white;
`;

export const PhoneInputWrapper = styled.div`
  width: 90%;
  margin-top: 20px; 
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const PricePart = styled.div`
  width: 90%;
  margin-top: 20px;
  padding-left: 10px;
  font-size: 22px;
`;

export const PriceSpan = styled.span`
  font-weight: bold;
  font-size: 23px;
`;

export const SubmitButton = styled.button`
  width: 90%;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 16px;
  margin-top: 20px;
  background-color: #f8f4ec;
  color: whitesmoke;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 1px 1px 2px black;
  border: 1px solid silver;
  cursor: pointer;
`;
