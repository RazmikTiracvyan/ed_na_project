import { useEffect, useState } from "react";
import axios from "axios";

import { Container, LeftSide, RightSide } from "./styled";

import {
  BasketProducts,
  CreditCardForm,
  EmptyList,
  ModalLogin,
  ModalOrder,
  ProfileVerification,
} from "../../components";

export const BasketPage = ({ isUser, setUser }) => {
  const [loading, setLoading] = useState(false);
  const [modalOrderVisible, setModalOrderVisible] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return setUser(null);

      try {
        const { data, status } = await axios.get(
          "http://localhost:3002/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (status === 200) {
          data.basket?.forEach((item) => {
            if (!item.quantityToBuy) item.quantityToBuy = 1;
          });
          setUser(data);
        } else {
          localStorage.removeItem("token");
          setUser(null);
        }
      } catch (error) {
        localStorage.removeItem("token");
        setUser(null);
      }
    };
    fetchUserProfile();
  }, [setUser]);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <LeftSide>
        {isUser?.basket?.length === 0 ? (
          <EmptyList />
        ) : (
          <BasketProducts
            isUser={isUser}
            setUser={setUser}
            setLoading={setLoading}
          />
        )}
      </LeftSide>
      <RightSide>
        <CreditCardForm
          setOpenModalOrder={setModalOrderVisible}
          setOk={setOrderSuccess}
          isUser={isUser}
          setUser={setUser}
        />
      </RightSide>
      {!isUser && <ModalLogin />}
      {isUser?.verified === false && <ProfileVerification isUser={isUser} />}
      {modalOrderVisible && (
        <ModalOrder
          isLoading={loading}
          ok={orderSuccess}
          setModalVisible={setModalOrderVisible}
        />
      )}
    </Container>
  );
};
