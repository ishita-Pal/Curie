import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.scss'; // Assuming this file contains the CSS styles for the component

const Category = ({ categories }) => {
    const navigate = useNavigate();

    return (
        <div className="cmain">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
                        <div className="image">
                            <img className="image__img" src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
                            <div className="image__overlay image__overlay--primary">
                                <div className="image__title">{item.attributes.title}</div>
                                <p className="image__description">{item.attributes.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
