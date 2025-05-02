import { EmptyText, EmptyTitle, MainDiv, VideoInner } from "./styled";
import empty_video from "../../assets/videos/empty.mp4";
import { Link } from "react-router-dom";

export const EmptyList = () => {
  return (
    <MainDiv>
        <EmptyTitle>Ձեր զամբյուղը դատարկ է</EmptyTitle>
        <EmptyText>Խնդրում ենք լրացնել այն <Link to={'/shop'}>խանութից</Link></EmptyText>
      <VideoInner src={empty_video} loop autoPlay muted></VideoInner>   
    </MainDiv>
  );
};
