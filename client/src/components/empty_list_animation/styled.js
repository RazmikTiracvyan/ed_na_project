import styled from "styled-components"

export const MainDiv = styled.div`
    width: 100%;
    height: 570px;
    background-color:#f4f5f7;
`

export const VideoInner = styled.video`
    width: 100%;
    height: 400px;
`

export const EmptyTitle = styled.div`
    width: 100%;
    font-size: 37px;
    text-align: center;
    padding-top: 15px;
    font-weight: bold;
    @media (max-width:390px){
        font-size:27px;
    }
`

export const EmptyText = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 25px;
`