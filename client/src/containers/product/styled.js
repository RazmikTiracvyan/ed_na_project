import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  max-width: 1200px;
  margin: 100px auto;
  padding: 20px;
  padding-bottom: 0;
  @media(max-width:800px){
    width: 80%;
  }
  @media(max-width:650px){
    width: 90%;
  }
`;

export const ProductSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  flex: 1 1 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    flex: 1 1 30%;
  }
`;
export const ProductImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
`;

export const ProductDetails = styled.div`
  flex: 1 1 100%;
  padding: 20px 0;

  @media (min-width: 768px) {
    flex: 1 1 50%;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-top: 15px;
`;

export const Details = styled.div`
  margin: 15px 0;
  font-size: 14px;
  cursor: pointer;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
`;

export const AddToCartButton = styled.button`
  background-color: black;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 5px;
  &:hover {
    background-color: #333;
  }
`;
