const ProductCard = ({ product }) => {
    return (
        <a href={`/products/${product._id}`}>
            <div className="shadow-md hover:cursor-pointer hover:shadow-xl rounded-lg">
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[430px] object-cover rounded-tr-lg rounded-tl-lg"
                    />
                    <h1 className="font-bold text-xl p-2">{product.name}</h1>
                    <div className="flex items-center justify-between py-3 px-5">
                        <span className="font-semibold text-xl">
                            ${product.price}
                        </span>
                        <span className="font-bold text-xl bg-fuchsia-300 rounded-full py-1 px-3">
                            {product.brand}
                        </span>
                    </div>
                </div>
            </div>
        </a>
    );
};
export default ProductCard;
