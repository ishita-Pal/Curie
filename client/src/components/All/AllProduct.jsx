import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Context } from '../../Utilis/Context';
import Product from "./../Products/Products.jsx"
import { fetchDataFromApi } from '../../Utilis/api';
import "./AllProduct.scss"
const AllProduct = () => {
  const { products,setProducts} = useContext(Context);
  const getProducts= () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log(res);
            setProducts(res);
    
        });
    };

    useEffect(() => {
        getProducts();
    }, []);

  
    return (
      <div className='Pro'>
          <Product products={products} headingText="All Products"/>
      </div>
  );  
};

export default AllProduct;
