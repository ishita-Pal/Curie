import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Drop from "./Drop.jsx";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { fetchDataFromApi } from "../../Utilis/api.js";
import { Context } from "../../Utilis/Context.js";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [hovering, setHovering] = useState(false); 
    const { cartCount, categories, setCategories } = useContext(Context);
    const navigate = useNavigate();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
        });
    };

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
   

    return (
        <>
            <header className={`header ${scrolled ? "sticky-header" : ""}`}>
                <div className="hcontent">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={()=>navigate("/contact_us")}>Contact Us</li>
                        <li>
                            Collections
                            <ul className={`dropdown-menu ${showCategories ? "show" : ""}`}>
                                <Drop categories={categories} />
                            </ul>
                        </li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        CURIE
                    </div>
                    <div className="right">
                        <FaSearch onClick={() => setShowSearch(true)} />
                        <FaHeart onClick={() => navigate("/wistlist")} />
                        <span className="cart" onClick={() => setShowCart(true)}>
                            <BsFillCartFill />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>

            {showCart && <Cart setshowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
};

export default Header;
