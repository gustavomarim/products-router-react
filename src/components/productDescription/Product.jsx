import React, { useEffect, useState } from 'react';
import styles from './Product.module.css';

import { useParams } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [pathImg, setPathImg] = useState('');
  const params = useParams();

  useEffect(() => {
    const productID = params.id;
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${productID}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json);
        console.log('fotos', json.fotos[0].src);
        setPathImg(json.fotos[0].src);
      });
  }, []);

  return (
    <>
      {product && (
        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <img src={pathImg} alt={product.nome} />
          </div>
          <div className={styles.productDescription}>
            <h1> {product.nome} </h1>
            <span>R$ {product.preco} </span>
            <p> {product.descricao} </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;