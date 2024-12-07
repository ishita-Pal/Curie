import { useState } from "react";
import "./Search.scss";
import { FaWindowClose } from "react-icons/fa";
import cc from "../../../assets/products/cc.webp";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const Search = ({setShowSearch}) => {
    const [query,setQuery]=useState("");
    const navigate=useNavigate();
    const onChange = (e) => {
        setQuery(e.target.value);
    };

    let { data } = useFetch(
        `/api/products?populate=*&filters[title][$contains]=${query}`
    );

    if(!query.length){
        data=null;
    }
    return(
        <div className="search">
            <div className="form">
                <input type="text" autoFocus placeholder="Search" value={query} onChange={onChange}/>
            <FaWindowClose onClick={()=>setShowSearch(false)}/>
            </div>

            <div className="serach-result-content">
                <div className="search-result">


             {data?.data?.map(item=>(

                <div key={item.id} className="serach-result-item" onClick={()=>{
                    navigate("/product/"+item.id)
                    setShowSearch(false);
                }}>
                        <div className="img-container">
                            <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt=""/>

                        </div>
                        <div className="prod-details">
                            <span className="name">{item.attributes.title}</span>
                            <span className="des">{item.attributes.desc}</span>
                        </div>
                        </div>
             ))}
             </div>
            </div>
        </div> 

    
    );
};

export default Search;
