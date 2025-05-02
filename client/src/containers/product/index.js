import React, { useState, useEffect } from "react";
import {
  Container,
  ProductDetails,
  ProductSection,
  ProductImage,
  ImageContainer,
  Title,
  Description,
  Price,
  AddToCartButton,
} from "./styled";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Product = ({ isUser }) => {
  const [product, setProduct] = useState(null);
  const [inBasket, setInBasket] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(
          `http://localhost:3002/products/get-one/${params.name}`
        );
        setProduct(response.data);

        const isInBasket = isUser?.basket?.some(
          (item) => item._id === response.data._id
        );
        setInBasket(isInBasket);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [params, isUser]);

  const addToBasket = async () => {
    try {
      if (!isUser) {
        toast.error("Խնդրում ենք մուտք գործել ձեր էջ");
        return;
      }

      if (inBasket) {
        toast.warning("Ապրանքն արդեն զամբյուղում է");
        return;
      }

      const payload = {
        userId: isUser._id,
        product,
      };

      const response = await axios.post(
        "http://localhost:3002/add-to-basket",
        payload
      );

      if (response.status === 200) {
        toast.success("Ապրանքը ավելացված է զամբյուղում");
        setInBasket(true);
      }
    } catch (error) {
      console.error("Error adding to basket:", error);
    }
  };

  if (!product) {
    return (
      <Box
        sx={{
          display: "flex",
          marginTop: "100px",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container>
      <ToastContainer />
      <ProductSection>
        <ImageContainer>
          <ProductImage
            src={`http://localhost:3002/${product?.image}`}
            alt={product?.name || "Product Image"}
          />
        </ImageContainer>
        <ProductDetails>
          <Title>{product?.name}</Title>
          {product?.material && <Description>Տեսակ` {product.material}</Description>}
          {product?.firma && <Description>Արտադրանք` {product.firma}</Description>}
          {product?.size && <Description>Չափը` {product.size}</Description>}

          <Price>{product?.price} AMD</Price>
          <AddToCartButton onClick={addToBasket}>
            {inBasket ? "Այս ապրանքն արդեն զամբյուղում է" : "Ավելացնել զամբյուղի մեջ"}
          </AddToCartButton>
        </ProductDetails>
      </ProductSection>
    </Container>
  );
};
