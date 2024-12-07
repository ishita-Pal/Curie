import "./Cart.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem"
import { useEffect } from "react";
import { Context } from "../../Utilis/Context";
import {makePaymentRequest} from "./../../Utilis/api"
import {loadStripe} from "@stripe/stripe-js";
 
const Cart = ({setshowCart}) => {
    const navigate=useNavigate();
    const{cart,total}=useContext(Context);
    const stripePromise=loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

    const handlePaymet=async() =>{
       try{
        const stripe=await stripePromise;
        const res=await makePaymentRequest.post("/api/orders",{
            products: cart,
        });

        await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id
        })
       }catch(error){
        console.log(error);
       }
    };
     
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    
    return(
        <div className="cartmain">
            <div className="clayer"></div>
                <div className="ccontent">
                    <div className="cheader">
                        <span className="heading">Shopping Cart</span>
                        <span className="closeBtn" onClick={()=>setshowCart(false)}>
                            <FaWindowClose className="closeBtn"/>
                            <span className="text">close</span>
                        </span>
                    </div>

                    {!cart?.length && <div className="cempty">
                        <BsCartX/>
                        <span>No products in the cart.</span>
                        <button className="returncta"onClick={() => navigate('/')} > RETURN TO SHOP</button>
                    </div>}

                    {!!cart?.length && <>
                    <CartItem/>
                    <div className="cfooter">
                        <div className="sub">
                            <span className="text">Subtotal:</span>
                            <span className="text total"> &#8377;{total} </span>
                        </div>
                        <div className="button">
                            <button className="checkout" onClick={handlePaymet}>Checkout</button>
                        </div>
                    </div>
                    </>}
            </div>
        </div>
    )
};

export default Cart;
