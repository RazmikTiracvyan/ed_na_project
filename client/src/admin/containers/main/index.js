import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  InformationCard,
  MainDiv,
  OnePart,
  RightPart,
  SecondPart,
  ThirdPart,
  IconPlace,
  Content,
  Amount,
  Title,
  PendingMain,
  PendingTitle,
  OrderDiv,
  UserImage,
  Datas,
  AdressandTel,
  DateTime,
  PricePlace,
  PersonalComment,
  CommentDiv,
  CommentDiv2,
} from "./styled";
import { LeftMenu, OrderModal } from "../../components";

import { LuDollarSign } from "react-icons/lu";
import { SlBasket, SlPeople } from "react-icons/sl";
import { FaRegMessage } from "react-icons/fa6";

import axios from "axios";

export const MainAdmin = () => {
  const [lastUsers, setLastUsers] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);

  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [orderedProduct, setOrderedProduct] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(pendingOrders);
    
    if (!localStorage.getItem("admin") && location.state === null) {
      navigate("/admin-ed-na");
    }
  }, []);

  useEffect(() => {
    async function getLastUsers() {
      try {
        const requests = await axios.get(
          "http://localhost:3002/admin/users/last"
        );
        setLastUsers(requests.data.reverse());
      } catch (err) {
        console.log(err);
      }
    }

    getLastUsers();
  }, []);

  useEffect(() => {
    async function getPendingOrders() {
      try {
        const request = await axios.get("http://localhost:3002/admin/orders");

        if (request.status === 200)
          setPendingOrders(
            request.data.filter((e) => e.checked === false).reverse()
          );
          console.log(pendingOrders);
          
      } catch (err) {
        console.log(err);
      }
    }
    getPendingOrders();
  }, [openOrderModal]);

  function openOrder(e) {
    setOpenOrderModal(true);
    setOrderedProduct(e);
  }

  return (
    <MainDiv>
      {openOrderModal && (
        <OrderModal {...{ setOpenOrderModal, orderedProduct }} />
      )}
      <LeftMenu></LeftMenu>
      <RightPart>
        <OnePart>
          <InformationCard>
            <IconPlace>
              <LuDollarSign />
            </IconPlace>
            <Content>
              <Title>Monthly Revenue</Title>
              <Amount>
                5000$
              </Amount>
            </Content>
          </InformationCard>
          <InformationCard>
            <IconPlace>
              <SlBasket />
            </IconPlace>
            <Content>
              <Title>New Orders</Title>
              <Amount>{pendingOrders.length}</Amount>
            </Content>
          </InformationCard>
          <PendingMain>
            <PendingTitle>Pending orders</PendingTitle>
            {pendingOrders?.map((e, i) => (
              <OrderDiv key={e + i} onClick={() => openOrder(e)}>
                <UserImage />
                <Datas>
                  <AdressandTel>
                    {e.name}, {e.phone}
                  </AdressandTel>
                </Datas>
                <PricePlace>{e.price} AMD</PricePlace>
              </OrderDiv>
            ))}
          </PendingMain>
        </OnePart>

        <SecondPart>
          <InformationCard>
            <IconPlace>
              <FaRegMessage />
            </IconPlace>
            <Content>
              <Title>Pending Reviews</Title>
              <Amount>13</Amount>
            </Content>
          </InformationCard>
          <PendingMain>
            <PersonalComment>
              <UserImage />
              <CommentDiv>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </CommentDiv>
            </PersonalComment>
          </PendingMain>
        </SecondPart>

        <ThirdPart>
          <InformationCard>
            <IconPlace>
              <SlPeople />
            </IconPlace>
            <Content>
              <Title>New Customers</Title>
              <Amount>{lastUsers.length}</Amount>
            </Content>
          </InformationCard>
          <PendingMain>
            {lastUsers?.map((e, i) => (
              <PersonalComment key={e + i}>
                <UserImage />
                <CommentDiv2>
                  {e.name} | {e.email}
                </CommentDiv2>
              </PersonalComment>
            ))}
          </PendingMain>
        </ThirdPart>
      </RightPart>
    </MainDiv>
  );
};
