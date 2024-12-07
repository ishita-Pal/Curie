import "./Home.scss";
import{useEffect,useContext} from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category"
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../Utilis/api";
import { Context } from "../../Utilis/Context";
import Header from "../Header/Header";
const Home = () => {
    const { categories, setCategories ,products,setProducts} = useContext(Context);

  const getProducts= () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log(res);
            setProducts(res);
    
        });
    };
    
  const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
    
        });
    };
    
    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

  
    
    return (
        <div>
        <Banner/>
        <div className="mainc">
            <div className="layout">
        <Category categories={categories}/>
        <div>
        <Products products={products} headingText="Products"/>
        </div>
            </div>
        </div>
    </div>
    );
};

export default Home;
