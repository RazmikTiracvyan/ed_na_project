import { useState } from "react";
import { InformationCard, IconPlace, Content, Amount, MainDiv, Div1 } from "./styled";
import { AddProductForm, EditProductForm, LeftMenu } from "../../components";
import { AllProducts } from "../../components/all_products";

export const Products = () => {
  const [openAddingForm, setOpenAddingForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);

  function show_form() {
    setOpenAddingForm(true);
  }

  return (
    <Div1>
      <LeftMenu />
      <MainDiv>
        <InformationCard onClick={show_form}>
          <IconPlace></IconPlace>
          <Content>
            <Amount>Add product</Amount>
          </Content>
        </InformationCard>
        {openAddingForm && (
          <AddProductForm setOpenAddingForm={setOpenAddingForm} />
        )}
        <AllProducts
          setOpenEditForm={setOpenEditForm}
          openEditForm={openEditForm}
        />
      </MainDiv>
    </Div1>
  );
};
