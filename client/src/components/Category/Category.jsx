import "./Category.scss";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";

const Category = () => {
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

    return (
        <div className="catmain">
            <div className="layout">
                <div className="cattitle">
                    {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
                </div>
                {data ? (
                    <Products innerPage={true} products={data} />
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default Category;
