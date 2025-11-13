import products from "../products";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
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
