import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [allCategories, setAllCategories] = useState();
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();

    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);

    const [wishlist, setWishlist] = useState([]);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        let count = 0;
        cart?.map((item) => (count += item.attributes.quantity));
        setCartCount(count);
        let total = 0;
        cart.map(
            (item) =>
                (total += item.attributes.price * item.attributes.quantity)
        );
        setTotal(total);
    }, [cart]);

    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            setWishlist(JSON.parse(savedWishlist));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const AddToCart = (product, quantity) => {
        let items = [...cart];
        let i = items.findIndex(p => p.id === product.id);
        if (i !== -1) {
            items[i].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCart(items);
    };
    
    const RemoveToCart = (product) => {
        let items = [...cart];
        items = items.filter((p) => p.id !== product.id);
        setCart(items);
    };

    const CartProductQuantity = (type, product) => {
        let items = [...cart];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCart(items);
    };

    const AddHeart = (productId, product) => {
        if (wishlist.find((item) => item.id === productId)) {
            return;
        }
        const newWishlist = [...wishlist, product];
        setWishlist(newWishlist);
    };

    const RemoveHeart = (productId) => {
        setWishlist(wishlist.filter((item) => item.id !== productId));
    };

    return (
        <Context.Provider value={{
            allCategories,
            setAllCategories,
            categories,
            setCategories,
            products,
            setProducts,
            cart,
            setCart,
            wishlist,
            setWishlist,
            cartCount,
            setCartCount,
            total,
            setTotal,
            AddToCart,
            RemoveToCart,
            CartProductQuantity,
            AddHeart,
            RemoveHeart

        }}>{children}</Context.Provider>
    );
};

export default AppContext;
