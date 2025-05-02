import { useState } from "react";
import {
  ModalLoginn,
  MainModal,
  TopTitle,
  InputToType,
  FlexedDiv,
  SelectPart,
  Options,
  InstallImageDiv,
  InputFile,
  FinalButton,
  CloseX,
} from "./styled";
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from "axios";

export const AddProductForm = ({ setOpenAddingForm }) => {
  const [data, setData] = useState({
    name: "",
    product_type1: "",
    product_type2:"",
    price: 0,
    image: null,
    count: 0,
    size: "",
    firma: "",
    top: false,
    material: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      const response = await axios.post(
        "http://localhost:3002/admin/add-product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product added successfully:", response.data);
      setOpenAddingForm(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <ModalLoginn>
      <MainModal>
        <CloseX>
          <IoMdCloseCircleOutline onClick={() => setOpenAddingForm(false)} />
        </CloseX>
        <TopTitle>Hello dear admin!</TopTitle>

        <form onSubmit={handleSubmit}>
          <FlexedDiv>
            <InputToType
              placeholder="Product title"
              name="name"
              value={data.name}
              onChange={handleChange}
            />

            <SelectPart
              name="product_type1"
              value={data.product_type1}
              onChange={handleChange}
            >
              <Options value="">Choose a category</Options>
              <Options value="gorg">Gorg</Options>
              <Options value="sproc">Sproc</Options>
              <Options value="varaguyr">Varaguyr</Options>
              <Options value="ankoxnayin-paraga">Ankoxnayin paraga</Options>
              <Options value="bardz">Bardzer</Options>
              <Options value="srbich">Srbich</Options>
              <Options value="komplekt">Komplekt</Options>
            </SelectPart>

            <InputToType
              placeholder="Product type 2"
              type="text"
              name="product_type2"
              value={data.product_type2}
              onChange={handleChange}
            />


            <InstallImageDiv>
              Upload Image
              <InputFile type="file" name="image" onChange={handleFileChange} />
            </InstallImageDiv>

            <InputToType
              placeholder="Product price"
              type="number"
              name="price"
              value={data.price}
              onChange={handleChange}
            />

            <InputToType
              placeholder="Product count"
              type="number"
              name="count"
              value={data.count}
              onChange={handleChange}
            />
            <InputToType
              placeholder="Product size"
              name="size"
              value={data.size}
              onChange={handleChange}
            />
            <InputToType
              placeholder="Product firma"
              name="firma"
              value={data.firma}
              onChange={handleChange}
            />
            <InputToType
              placeholder="Top"
              name="top"
              value={data.top}
              onChange={handleChange}
            />
            <InputToType
              placeholder="Product material"
              name="material"
              value={data.material}
              onChange={handleChange}
            />
            <FinalButton type="submit">Add Product</FinalButton>
          </FlexedDiv>
        </form>
      </MainModal>
    </ModalLoginn>
  );
};
