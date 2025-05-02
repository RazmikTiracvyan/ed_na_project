import styled from "styled-components";

export const BigDiv = styled.div`
  width: 80%;
  height: 80vh;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const ProductDiv = styled.div`
    width: 100%;
    height: 75px;
    border-bottom: 1px solid silver;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Ramka = styled.div`
    height: 75px;
    display: flex;
    align-items: center;
    gap: 15px;
`

export const ImagePlace = styled.div`
    width: 60px;
    height: 60px;
    border: 1px solid;
    border-radius: 10px;
    background-image: url(${({image})=> image});
    background-size: 100% 100%;
`

export const ProductName = styled.div`
    font-weight: bold;
`

export const CountDiv = styled.div``



export const IconsSpan = styled.div`
    font-size: 30px;
    color: #2196f3;
    color: red;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    margin-top: 2px;
`

export const IconSpan2 = styled.div`
    font-size: 26px;
    color: #2196f3;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    margin-top: 2px;
`