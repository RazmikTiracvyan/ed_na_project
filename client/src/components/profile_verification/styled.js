import styled from "styled-components"

export const ModalLoginn = styled.div`
    width: 100%;
    height: 95vh;
    position: absolute;
    position: fixed;
    z-index: 13;
    top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000042;

`

export const MainModal = styled.div`
    width: 500px;
    height: 190px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #ffeecb;

    @media(max-width:500px){
        width: 95%;
        height: 200px;
    }
    @media(max-width:390px){
        width: 95%;
        height: 320px;
    }
`

export const TopTitle = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 21px;
    font-weight: bold;
    @media(max-width:500px){
        padding-left: 10px;
    }
    @media(max-width:390px){
       margin-top: 15px;
       font-size: 19px;
    }
`

export const InfoText = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    @media(max-width:500px){
        padding-left: 10px;
    }
    @media(max-width:390px){
       margin-top: 15px;
       font-size: 14px;
    }
`

export const VerificationInput = styled.input`
    width: 200px;
    height: 35px;
    margin: 20px 15px;
    padding-left: 10px;
    border-radius: 5px;
    border: 1px solid white;
    @media(max-width:390px){
        width: 95%;
        margin: 10px;
    }
`

export const VerificationButton = styled.button`
    width: 120px;
    height: 35px;
    margin: 10px 0;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    @media(max-width:390px){
        width: 95%;
        margin: 10px;
    }
`