import React from 'react';
import "./Heart.scss"
import { MdDelete } from "react-icons/md";
import { useContext } from 'react';
import { Context } from '../../Utilis/Context';
import { useNavigate } from 'react-router-dom';
import whishlist from './../../assets/whishlist.webp'

const Heat = () => {
  const navigate=useNavigate();
  const { wishlist,RemoveHeart} = useContext(Context)
  if (wishlist.length==0) {
    return(
      <div className='empty'>
        <img src={whishlist} alt="/" className="wempty"/>
        <h1 className="weempty">Your whishlist is empty</h1>
      </div>
    )
  }

  return (
    <>
      <h1 className='wheading'>Wishlist</h1>
      <div className="cart-productss">
        {wishlist.map((product) => (
          <div className="cart-productt" key={product.id}>
           

            <div className="img-containerr" onClick={()=>{navigate("/product/"+product.id)
                }}>
            <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + product.attributes.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-detailss">
              <span className="namme" onClick={()=>{navigate("/product/"+product.id)
                }}>{product.attributes.title}</span>
              <span className="highlightt" onClick={()=>{navigate("/product/"+product.id)
                }}>&#8377; {product.attributes.price}</span>
              
            <MdDelete size={35} className="close-btnn" onClick={() => RemoveHeart(product.id)} />
            </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default Heat;
