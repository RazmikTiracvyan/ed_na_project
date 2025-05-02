import { Link } from "react-router-dom"
import styled from "styled-components"

export const ModalLoginn = styled.div`
    width: 100%;
    height: 95vh;
    position: absolute;
    position: fixed;
    z-index: 13;
    top: 100px;
    background-color: #00000042;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MainModal = styled.div`
    width: 500px;
    height: 190px;
    background-color: #ffeecb;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    overflow: hidden;
    @media(max-width:500px){
        width: 320px;
        height: 200px;
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
`

export const LogInLink = styled(Link)`
   display: inline-block;
`

export const LogInButton = styled.div`
    width: 100px;
    height: 35px;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 20px;
    display: flex;
    justify-content: center;
    color: black;
    align-items: center;
    @media(max-width:500px){
        margin-left: 10px;
    }
`