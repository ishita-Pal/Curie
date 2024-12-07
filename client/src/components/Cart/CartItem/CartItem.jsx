import "./CartItem.scss";
import { FaWindowClose } from "react-icons/fa";
import cc from "../../../assets/products/cc.webp";
import { useContext } from "react";
import { useEffect } from "react";
import { Context } from "../../../Utilis/Context";

const CartItem = () => {
    const { cart, RemoveToCart,CartProductQuantity} = useContext(Context);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <div className="cart-products">
            {cart.map((item) => (
                <div key={item.id} className="cart-product">
                    <div className="img-container">
                
                    <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                    </div>

                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <FaWindowClose className="close-btn" onClick={() => RemoveToCart(item)} />

                        <div className="quantity-buttons">
                            <span onClick={()=>CartProductQuantity('dec',item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={()=>CartProductQuantity('inc',item)}>+</span>
                        </div>

                        <div className="text">
                            <span>{item.attributes.quantity}x</span>
                            <br/>
                            <span className="highlight">&#8377; {item.attributes.price *item.attributes.quantity}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
