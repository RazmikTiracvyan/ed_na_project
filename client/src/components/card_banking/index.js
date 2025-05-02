import React, { useEffect, useState } from "react";

import {
  Container,
  CredentialInput,
  FormTitle,
  PricePart,
  PriceSpan,
  SubmitButton,
  PhoneInputWrapper,
} from "./styled";

import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const CreditCardForm = ({
  isUser,
  setOpenModalOrder,
  setOk,
  setUser
}) => {
  const [formData, setFormData] = useState({
    name: isUser?.name,
    email: isUser?.email,
    phone: "",
    adress: "",
    totalPrice: "",
  });

  const [errors, setErrors] = useState({});
  const [realPrice, setRealPrice] = useState(0);

  useEffect(()=>{
    let price = 0;

    isUser?.basket?.forEach(element => {
      price += element.price * element.quantityToBuy
    });

    setRealPrice(price)
  }, [isUser])

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Անունը պարտադիր է։";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Պահանջվում է վավեր էլ.հասցե";
    if (!formData.phone.trim() || formData.phone.length < 8)
      newErrors.phone = "Պահանջվում է վավեր հեռախոսահամար:";
    if (!formData.adress.trim()) newErrors.adress = "Հասցեն պարտադիր է։";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const orderItems = async () => {
    if (!validate()) return;

    try {

      if (isUser.basket.length > 0) {
        const request = await axios.post(
          `http://localhost:3002/order/${isUser?._id}`,
          {
            ...formData,
            price:realPrice,
            ordering: isUser?.basket,
          }
        );
        if (request.status === 200) {
          setOk(true);
          setUser(request.data.user)
        }
      } else {
        setOk(false);
      }

      setOpenModalOrder(true);

    } catch (err) {
      console.error("Error sending order:", err);
    }
  };

  return (
    <>
      <Container>
        <FormTitle>Մուտքագրեք ձեր տվյալները</FormTitle>
        <CredentialInput
          placeholder="Անուն"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        <CredentialInput
          placeholder="էլ. հասցեն"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        <PhoneInputWrapper>
          <PhoneInput
            country={"am"}
            value={formData.phone}
            onChange={(value) => handleInputChange("phone", value)}
            inputStyle={{
              width: "100%",
              height: "45px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
              backgroundColor: "#f9f9f9",
            }}
          />
        </PhoneInputWrapper>

        {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}

        <CredentialInput
          placeholder="Հասցե"
          value={formData.adress}
          onChange={(e) => handleInputChange("adress", e.target.value)}
        />
        {errors.adress && (
          <span style={{ color: "red" }}>{errors.adress}</span>
        )}
        <PricePart>
          ընդհանուր` <PriceSpan>{realPrice} AMD</PriceSpan>
        </PricePart>
        <SubmitButton onClick={orderItems}>Գրանցել պատվեր</SubmitButton>
      </Container>
    </>
  );
};
