import "./Products.scss";
import Product from "./Product/Product";
import { useNavigate } from "react-router-dom";

const Products = ({ products, innerPage, headingText }) => {
    const navigate = useNavigate();
    let displayedProducts = products?.data;

    if (headingText === "Products") {
        displayedProducts = products?.data?.slice(0, 8);
    }

    return (
        <div className="products">
            {!innerPage && (
                <div className="header-container">
                    <div className="heading">{headingText}</div>
                    {headingText === "Products" && (
                        <span className="show" onClick={() => navigate('/all')}>Show All</span>
                    )}
                </div>
            )}
            <div className="product">
                {displayedProducts?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
