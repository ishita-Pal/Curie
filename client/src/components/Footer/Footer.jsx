import "./Footer.scss";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import payments from "../../assets/payments.png"
const Footer = () => {
    const navigate=useNavigate();
    return(
        <div className="footer">
            <div className="fcontent">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut, optio itaque soluta pariatur inventore.</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>

                    <div className="c-item">
                        <FaLocationDot />
                        <div className="text">Chandigarh,India</div>
                    </div>
                    {/* <div className="c-item">
                    <FaPhoneVolume />
                        <div className="text">+918708065320</div>
                    </div> */}
                    <div className="c-item">
                    <MdEmail/>
                        <div className="text">curie.laika@gmail.com</div>
                    </div>
                </div>
    
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text" onClick={() => navigate('/')}>Home</div>
                    <div className="text">Terms & Conditions</div>
                    <div className="text" onClick={()=>navigate('/contact_us')}>Contact Us</div>
                </div>
            </div>
            <div className="bottom">
                <div className="bcontent">
                    <div className="text">
                        CURIE 2024 by Aditi Goel and Adavya Goel<br/>
                        Website by Ishita Pal
                    </div>
                    <img src={payments} alt=""/>
                </div>
            </div>
        </div>
    )
};

export default Footer;