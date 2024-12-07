import "./SingleProduct.scss";
import { useState,useContext } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";


import useFetch from "../../hooks/useFetch.js";

import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import { Context } from "../../Utilis/Context.js";
const SingleProduct = () => {
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const[quantity,setQuantity]=useState(1); 
    const {AddToCart}=useContext(Context);
    const { AddHeart}=useContext(Context);
    if (!data) return null; 
    const product = data.data[0].attributes;
    const imgUrl = process.env.REACT_APP_STRIPE_APP_DEV_URL + product.img.data[0].attributes.url;

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };
    return (
        <div className="smain">
            <div className="layout">
                <div className="scontent">
                    <div className="left">
                        <img src={imgUrl} alt={product.title} />
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="des">{product.description}</span>

                        <div className="buttons">
                            <div className="count">
                            <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>

                            <button className="add" onClick={()=>{
                                AddToCart(data.data[0],quantity);
                                setQuantity(1);
                                }}>
                                <FaCartPlus size={20}/>
                                ADD TO CART
                            </button>

                            <div className="heart">
                            
                
                            <button
                            className="addto"
                            onClick={() => {  
                                AddHeart(data.data[0].id, data.data[0]);
                            }}>
                            <FaHeartCirclePlus size={40} />
                        </button>

                    
                            </div>
                        </div>
                   
                        <span className="divider"/>
                        <div className="info">
                            <span className="textb">
                            Category:{'  '} 
                            <span>{product.categories.data[0].attributes.title}</span>
                            </span>
                            <span className="textb">
                                Share:
                                <span className="social">
                                    <FaFacebook size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedin size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts productId={id} categoryId={product.categories.data[0].id}/>
            </div>
        </div>
    );
};

export default SingleProduct;
