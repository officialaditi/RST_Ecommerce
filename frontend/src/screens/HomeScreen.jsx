import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useState, useEffect, use } from "react";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get(
                "/api/products"
            );
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <>
            <h1 className="font-bold text-3xl underline text-center my-6">
                Latest Products.
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 max-w-[1700px] mx-auto w-full">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};
export default HomeScreen;
