import React from "react";
import { useNavigate } from "react-router-dom";
import BannerImg from "../../../assets/banner.png";
import "./Banner.scss";
import ImageSlider from "./ImageSlider";

const Banner = () => {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate("/all");
    };

    return (
        <div className="hero">
            <ImageSlider/>
        </div>
    );
};

export default Banner;
