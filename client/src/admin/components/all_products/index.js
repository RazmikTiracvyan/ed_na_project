import { useEffect, useState } from "react";
import {
  BigDiv,
  CountDiv,
  IconsSpan,
  IconSpan2,
  ImagePlace,
  ProductDiv,
  ProductName,
  Ramka,
} from "./styled";

import { TiDeleteOutline } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";

import axios from "axios";
import { EditProductForm } from "../edit_items";

export const AllProducts = ({openEditForm, setOpenEditForm}) => {
  const [allProducts, setAllProducts] = useState([]);
  const [editProduct, setEditProduct] = useState()
  const [editProductIndex, setEditProductIndex] = useState()

  useEffect(() => {
    async function get_products() {
      try {
        const request = await axios.get(
          "http://localhost:3002/products/get-all"
        );
        console.log(request);
        if (request.status === 200) {
          setAllProducts(request.data.reverse());
        } else {
          alert("something went wrong");
        }
      } catch (err) {
        console.log(err);
      }
    }

    get_products();
  }, []);

  async function remove_element(id) {
    try {
      const request = await axios.delete(
        `http://localhost:3002/products/remove-one/${id}`
      );
      if (request.status === 200) {
        setAllProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  function openEditFormFunc(e, i){
    setOpenEditForm(true)
    setEditProduct(e)
    setEditProductIndex(i)
  }

  return (
    <>
      <BigDiv>
        {allProducts.map((e, i) => (
          <ProductDiv key={e + i}>
            <Ramka>
              <ImagePlace image={`http://localhost:3002/${e.image}`} />
              <ProductName>{e.name}</ProductName>
            </Ramka>
            <CountDiv>քանակ` {e.count}</CountDiv>
            <CountDiv>արժեքը` {e.price} դրամ</CountDiv>
            <Ramka>
              <IconsSpan onClick={() => remove_element(e._id)}>
                <TiDeleteOutline />
              </IconsSpan>
              <IconSpan2 onClick={()=>openEditFormFunc(e, i)}>
                <MdModeEdit />
              </IconSpan2>
            </Ramka>
          </ProductDiv>
        ))}
      </BigDiv>
      {openEditForm && <EditProductForm editProductIndex={editProductIndex} setAllProducts={setAllProducts} editProduct={editProduct}  setOpenEditForm={setOpenEditForm} />}
    </>
  );
};
