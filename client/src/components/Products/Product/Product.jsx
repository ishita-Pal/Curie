import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ data, id }) => {
    const navigate=useNavigate();
    if (!data || !data.img || !data.img.data || data.img.data.length === 0) {
        return <div className="pcard">Image not available</div>; // or handle the case when data is missing
    }

    return (
        <div className="pcard" onClick={()=> navigate("/product/"+id)}>
            <div className="thumb">
                <img
                    src={
                        process.env.REACT_APP_STRIPE_APP_DEV_URL +
                        data.img.data[0].attributes.url
                    }
                    alt="Product Image"
                />
            </div>
            <div className="pdet">
                <span className="name">{data.title}</span>
                <span className="price">&#8377; {data.price} </span>
            </div>
        </div>
    );
};

export default Product;
