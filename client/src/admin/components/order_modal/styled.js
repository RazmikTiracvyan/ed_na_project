import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  height: 95vh;
  position: fixed;
  z-index: 13;
  top: 50px;
  background-color: #00000042;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProductDetailsDiv = styled.div`
    width: 55%;
    height: 600px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 15px;
    overflow-y: scroll;
    position: relative;
`

export const NamePart = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    position: relative;
`
export const CloseX = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 18px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const PersonalInformation = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid silver;
`

export const ProductDivPart = styled.div`
    width: 100%;
    height: 230px;
    border-bottom: 1px solid silver;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
`

export const ProductImagePart = styled.div`
    width: 180px;
    height: 180px;
    border: 1px solid;
    border-radius: 20px;
    background-image: url(${({image})=> image});
    background-size: 100% 100%;
`

export const ProductDet = styled.div`
    width: 70%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
`

export const AdditionalInfromaiton = styled.div`
    width: 45%;
    height: 45px;
    background-color: #2196f3;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 15px;
`

export const ConfirmDiv = styled.div`
    width: 100%; 
    height: 70px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ConfirmButton = styled.button`
    width: 220px;
    height: 50px;
    background-color: #27ce00;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: bold;
`

export const IconSpan = styled.span`
    position: relative;
    top: 4px;
    left: 3px;
`