import { useState, useEffect } from "react";
import axios from "axios";

import {
  ProductsMain,
  Product,
  ProductImagePlace,
  ProductName,
  ProductPrice,
  LineUnder,
} from "./styled";

import { Paginations } from "../shop_pagination";

export const FilteredShop = ({type}) => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const productsPerPage = 8; 

  useEffect(() => {
    async function get_products() {
      try {
        const request = await axios.get("http://localhost:3002/products/get-all");
        if (request.status === 200) {
          console.log(request.data);
          
          const filteredArr = request.data.filter((e)=> e.product_type1 === type || e.product_type2 === type)
          console.log(filteredArr);
          
          setAllProducts(filteredArr.reverse());
        } else {
          alert("Something went wrong");
        }
      } catch (err) {
        console.log(err);
      }
    }

    get_products();
  }, [type]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ProductsMain>
      {currentProducts.map((e) => (
        <Product key={e._id} to={`/product/${e._id}`}>
          <ProductImagePlace image={`http://localhost:3002/${e.image}`} />
          <ProductName>{e.name}</ProductName>
          <ProductPrice>{e.price}</ProductPrice>
        </Product>
      ))}
      <Paginations
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={allProducts.length}
        paginate={handlePageChange}
      />
      <LineUnder />
    </ProductsMain>
  );
};
