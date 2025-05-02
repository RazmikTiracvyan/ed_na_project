import {
    MainDiv,
    NamePart,
    PersonalInformation,
    ProductDetailsDiv,
    ProductDivPart,
    ProductImagePart,
    ProductDet,
    AdditionalInfromaiton,
    CloseX,
    ConfirmDiv,
    ConfirmButton,
    IconSpan,
  } from "./styled";
  
  import { IoMdCloseCircleOutline } from "react-icons/io";
  import { GiConfirmed } from "react-icons/gi";
  import axios from "axios"; 
  
  export const OrderModal = ({ setOpenOrderModal, orderedProduct }) => {
    async function confirm_order() {
      try {
        const response = await axios.put(
          `http://localhost:3002/admin/confirm-order/${orderedProduct._id}`
        );
  
        if (response.status === 200) {
          alert("Order confirmed successfully!");
          setOpenOrderModal(false); 
        } else {
          alert("Failed to confirm order.");
        }
      } catch (err) {
        console.error(err);
        alert("An error occurred while confirming the order.");
      }
    }
  
    return (
      <MainDiv>
        <ProductDetailsDiv>
          <NamePart>
            {orderedProduct.name}'s order{" "}
            <CloseX>
              <IoMdCloseCircleOutline onClick={() => setOpenOrderModal(false)} />
            </CloseX>
          </NamePart>
          <PersonalInformation>email: {orderedProduct.email}</PersonalInformation>
          <PersonalInformation>phone: +{orderedProduct.phone}</PersonalInformation>
          <PersonalInformation>adress: {orderedProduct.adress}</PersonalInformation>
          <PersonalInformation>final price: {orderedProduct.price} AMD</PersonalInformation>
          {orderedProduct.ordering?.map((e, i) => (
            <ProductDivPart key={e + i}>
              <ProductImagePart
                image={`http://localhost:3002/${e.image}`}
              ></ProductImagePart>
              <ProductDet>
                <AdditionalInfromaiton>Prod name: {e.name}</AdditionalInfromaiton>
                <AdditionalInfromaiton>firma: {e.firma}</AdditionalInfromaiton>
                <AdditionalInfromaiton>material: {e.material}</AdditionalInfromaiton>
                <AdditionalInfromaiton>size: {e.size}</AdditionalInfromaiton>
                <AdditionalInfromaiton>quantity: {e.quantityToBuy}</AdditionalInfromaiton>
                <AdditionalInfromaiton>
                  price: {e.quantityToBuy * e.price} AMD
                </AdditionalInfromaiton>
              </ProductDet>
            </ProductDivPart>
          ))}
          <ConfirmDiv>
            <ConfirmButton onClick={confirm_order}>
              Confirm Order{" "}
              <IconSpan>
                <GiConfirmed />
              </IconSpan>
            </ConfirmButton>
          </ConfirmDiv>
        </ProductDetailsDiv>
      </MainDiv>
    );
  };
  