import { Link } from "react-router-dom";
import styled from "styled-components";
import P1 from "../../assets/images/person.png";

export const MainDiv = styled.div`
  width: 100%;
  display: flex;
`;

export const RightPart = styled.div`
  width: 85%;
  display: flex;
`;

export const OnePart = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const SecondPart = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ThirdPart = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const InformationCard = styled(Link)`
  width: 290px;
  height: 90px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  text-decoration: none;
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

export const Title = styled.div`
  font-size: 15px;
  color: #666;
  width: 100%;
  margin-top: 15px;
  text-align: right;
  padding-right: 22px;
`;

export const Amount = styled.div`
  font-size: 23px;
  font-weight: bold;
  color: #333;
  text-align: right;
  margin-top: 9px;
  padding-right: 22px;
`;

export const PendingMain = styled.div`
  width: 95%;
  height: 80vh;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
`;

export const PendingTitle = styled.div`
  width: 100%;
  height: 60px;
  padding: 13px 17px;
  font-size: 25px;
`;

export const OrderDiv = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-top: 2px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: #f0f0f7;
  }
`;

export const UserImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-image: url(${P1});
  background-size: cover;
`;

export const Datas = styled.div`
  width: 60%;
  height: 55px;
  margin-left: 15px;
`;

export const AdressandTel = styled.div`
  width: 100%;
  padding-left: 10px;
  padding-top: 18px;
`;

export const DateTime = styled.div`
  color: gray;
  padding-left: 10px;
  padding-top: 5px;
  font-size: 14px;
`;

export const PricePlace = styled.div`
  width: 130px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  margin-left: 65px;
  font-weight: bold;
`;

export const PersonalComment = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-top: 2px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: #f0f0f7;
  }
`;

export const CommentDiv = styled.div`
  width: 220px;
  height: 65px;
  margin-left: 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const CommentDiv2 = styled.div`
  width: 220px;
  height: 65px;
  margin-left: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
`;
