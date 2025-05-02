import { IoTrashOutline } from "react-icons/io5";
import {
  ProductDiv,
  ImagePart,
  NamePart,
  PlusMinusZeroPart,
  PlusBtn,
  PricePart,
  RemoveItem,
  ZeroSpan,
  DivImage,
  DivName,
  PLZM,
  DetDiv,
} from "./styled";

import axios from "axios";

export const BasketProducts = ({ isUser, setUser, setLoading }) => {
  const updateBasketQuantity = async (productId, adjustment) => {
    try {
      const apiEndpoint =
        adjustment > 0
          ? "http://localhost:3002/quantity-increase"
          : "http://localhost:3002/quantity-decrease";

      const { data } = await axios.post(apiEndpoint, {
        userId: isUser._id,
        productId,
      });

      setUser((prev) => ({ ...prev, basket: data.basket }));
    } catch (error) {
      console.error("Error updating quantity:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeItemFromBasket = async (productId) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:3002/remove-from-basket",
        {
          userId: isUser._id,
          productId,
        }
      );

      setUser((prev) => {
        const updatedBasket = data.basket.map((item) => {
          const existingItem = prev.basket.find((i) => i._id === item._id);
          return { ...item, quantityToBuy: existingItem?.quantityToBuy || 1 };
        });
        return { ...prev, basket: updatedBasket };
      });
    } catch (error) {
      console.error("Error removing item:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isUser?.basket?.reverse().map((item, index) => (
        <ProductDiv key={item._id || index}>
          <DivImage>
            <ImagePart>
              <img
                src={`http://localhost:3002/${item.image}`}
                alt={item.name}
                width="100%"
                height="100%"
              />
            </ImagePart>
          </DivImage>
          <DivName>
            <NamePart>{item.name}</NamePart>
          </DivName>
          <PLZM>
            <PlusMinusZeroPart>
              <PlusBtn onClick={() => updateBasketQuantity(item._id, 1)}>
                +
              </PlusBtn>
              <ZeroSpan>{item.quantityToBuy}</ZeroSpan>
              <PlusBtn onClick={() => updateBasketQuantity(item._id, -1)}>
                -
              </PlusBtn>
            </PlusMinusZeroPart>
          </PLZM>
          <DetDiv>
            <PricePart>
              ընդհանուր` {item.price * (item.quantityToBuy)} AMD
            </PricePart>
            <RemoveItem onClick={() => removeItemFromBasket(item._id)}>
              <IoTrashOutline />
            </RemoveItem>
          </DetDiv>
        </ProductDiv>
      ))}
    </>
  );
};
