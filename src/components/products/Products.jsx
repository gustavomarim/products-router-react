import React from 'react';
import styles from './Products.module.css';

import { useNavigate } from 'react-router-dom';

const Products = ({ products }) => {
  const navigate = useNavigate();

  function handleClick({ target }) {
    navigate(`/product/${target.id}`);
  }

  return (
    <>
      <div className={styles.gridContainer}>
        {products && products.map((product) => (
          <div
            id={product.id}
            key={product.id}
            className={styles.productContainer}
            onClick={handleClick}
          >
            <div className={styles.productImage}>
              <img id={product.id} src={product.fotos[0].src} alt={product.fotos[0].titulo} />
            </div>
            <p id={product.id} className='productName'> {product.nome} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;