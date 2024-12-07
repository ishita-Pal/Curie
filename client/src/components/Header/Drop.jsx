import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Drop.scss';

const Drop = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="cmainn">
            <div className="categorieees">
                {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="categoryyy"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <div className="overlay">
                            <div className="title">{item.attributes.title}</div>
                        </div>
                        <img
                            src={
                                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                item.attributes.img.data.attributes.url
                            }
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Drop;
