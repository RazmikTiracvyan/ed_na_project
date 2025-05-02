import { PaginationMainDiv, PaginationNumbers } from "./styled";

export const Paginations = ({ currentPage, productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage); 

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationMainDiv>
      {pageNumbers.map((number) => (
        <PaginationNumbers
          key={number}
          onClick={() => paginate(number)}
          style={{
            fontWeight: currentPage === number ? "bold" : "normal", 
            cursor: "pointer",
          }}
        >
          {number}
        </PaginationNumbers>
      ))}
    </PaginationMainDiv>
  );
};
