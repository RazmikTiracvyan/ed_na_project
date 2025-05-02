import styled from "styled-components";

export const RoundDiv = styled.div`
    width: 70px;
    height: 70px;
    border: 3px solid gray;
    position: absolute;
    z-index: 12;
    bottom: 20px;
    right: 20px;
    position: fixed;
    border-radius: 50%;
    cursor: pointer;
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #ececec;
    }
    &:hover{
        span{
            color: black;
        }
    }
`

export const Iconpart = styled.span`
    font-size: 30px;
    color: gray;
    transition: 1s;
    margin-top: 2px;
`