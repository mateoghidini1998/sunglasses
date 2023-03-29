import React, { useState } from 'react'
import aviator from '../../assets/images/aviator.jpg'
import roundFleck from '../../assets/images/roundfleck.jpg'
import wayfarer from '../../assets/images/wayfarer.jpg'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Array of products
  const products = [
    { id: 1, name: "Aviator", image: aviator },
    { id: 2, name: "Round Fleck", image: roundFleck },
    { id: 3, name: "Wayfarer", image: wayfarer },
    { id: 4, name: "Aviator", image: aviator },
    { id: 5, name: "Round Fleck", image: roundFleck },
    { id: 6, name: "Wayfarer", image: wayfarer },
    { id: 7, name: "Aviator", image: aviator },
    { id: 8, name: "Round Fleck", image: roundFleck },
    { id: 9, name: "Aviator", image: aviator },
    { id: 10, name: "Round Fleck", image: roundFleck },
    { id: 11, name: "Wayfarer", image: wayfarer },
    { id: 12, name: "Aviator", image: aviator },
    { id: 13, name: "Round Fleck", image: roundFleck },
    { id: 14, name: "Wayfarer", image: wayfarer },
    { id: 15, name: "Aviator", image: aviator },
    { id: 16, name: "Round Fleck", image: roundFleck },
  ];

  // Calculate the index of the first and last products on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Get the products for the current page
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate the page numbers to display
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(startPage + 2, Math.ceil(products.length / productsPerPage));

  if (endPage - startPage < 2) {
    if (startPage === 1) {
      endPage = Math.min(startPage + 2, Math.ceil(products.length / productsPerPage));
    } else if (endPage === Math.ceil(products.length / productsPerPage)) {
      startPage = Math.max(1, endPage - 2);
    }
  }

  // Render the pagination buttons
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <section className="featured">
        <h2>Featured Sunglasses</h2>
        <div className="cards">
          {currentProducts.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="card-content">
                <h3>{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            id='back'
            className={currentPage === 1 ? "disabled" : ""}
            onClick={goToPrevPage}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack/>
          </button>
          {pageNumbers.map((number) => (
            <button 
              key={number}
              className={currentPage === number ? "active" : ""}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
          <button
            id='fw'
            className={currentPage === Math.ceil(products.length / productsPerPage) ? "disabled" : ""}
            onClick={goToNextPage}
            disabled={currentPage === Math.ceil(products.length / productsPerPage)}
          >
            <IoIosArrowForward/>
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductList;