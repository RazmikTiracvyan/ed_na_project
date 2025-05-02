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

export const EditProductForm = ({
  setOpenEditForm,
  editProduct,
  setAllProducts,
  editProductIndex,
}) => {
  const [data, setData] = useState(
    editProduct || {
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
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const edidProductFinally = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("product_type1", data.product_type1);
      formData.append("product_type2", data.product_type2);
      formData.append("price", data.price);
      formData.append("count", data.count);
      formData.append("size", data.size);
      formData.append("firma", data.firma);
      formData.append("top", data.top);
      formData.append("material", data.material);

      if (data.image) {
        formData.append("image", data.image);
      }

      const response = await axios.put(
        `http://localhost:3002/products/edit-one/${editProduct._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Product updated successfully!");
        setOpenEditForm(false);
        setAllProducts((prev) => {
          const updatedProducts = [...prev];
          updatedProducts[editProductIndex] = response.data[editProductIndex];
          return updatedProducts;
        });
      }
    } catch (err) {
      console.error("Error updating product:", err);
      alert("Failed to update product. Please try again.");
    }
  };

  return (
    <ModalLoginn>
      <MainModal>
        <CloseX>
          <IoMdCloseCircleOutline onClick={() => setOpenEditForm(false)} />
        </CloseX>
        <TopTitle>Hello dear admin Edit!</TopTitle>

        <form onSubmit={edidProductFinally}>
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
              <Options value="Gorg">Gorg</Options>
              <Options value="Sproc">Sproc</Options>
              <Options value="Ankoxnayin paraga">Ankoxnayin paraga</Options>
              <Options value="Bardzer">Bardzer</Options>
              <Options value="Komplekt">Komplekt</Options>
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
            <FinalButton type="submit">Edit Product</FinalButton>
          </FlexedDiv>
        </form>
      </MainModal>
    </ModalLoginn>
  );
};
