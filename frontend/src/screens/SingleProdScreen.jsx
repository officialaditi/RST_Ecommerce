import { useParams, Link } from "react-router-dom";
import Rating from "../components/Rating";
import clsx from "clsx";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleProductScreen = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchSingleProduct = async () => {
            const { data } = await axios.get(`/api/products/${id}`);
            setProduct(data);
        };
        fetchSingleProduct();
    }, [id]);
    return (
        <div>
            <Link
                to="/"
                className="bg-blue-500 text-white rounded-full px-6 py-2 text-xl"
            >
                Back
            </Link>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* col-1 */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[550px] object-cover"
                />
                <div className="flex flex-col gap-6">
                    {/* col-2 */}
                    <h3 className="font-bold text-xl underline">
                        {product.brand}
                    </h3>
                    <h3 className="font-semibold text-3xl my-3">
                        {product.name}
                    </h3>
                    <p className="text-xl">{product.description}</p>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                    />
                </div>
                <div>
                    {/* col-3 */}
                    <h2 className="font-bold text-3xl text-right">
                        Price: ${product.price}
                    </h2>
                    <div className="mt-10">
                        <h3
                            className={clsx(
                                "text-2xl font-semibold text-right",
                                product.countInStock > 0
                                    ? "text-green-500"
                                    : "text-red-500"
                            )}
                        >
                            {" "}
                            {product.countInStock > 0
                                ? "In Stock"
                                : "Not Available"}
                        </h3>
                    </div>
                    <button
                        className="w-full bg-teal-500 rounded-2xl mt-10 font-bold text-2xl py-3 text-white"
                        disabled={product.countInStock === 0}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
export default SingleProductScreen;
