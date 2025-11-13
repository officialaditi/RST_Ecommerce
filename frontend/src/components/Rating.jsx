import { IoIosStarHalf, IoIosStarOutline, IoMdStar } from "react-icons/io";

const Rating = ({ value, color = "text-yellow-500", text }) => {
    return (
        <div className="flex items-center mt-6">
            <div className="flex space-x-1 mr-3 ">
                {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className={color}>
                        {value >= i ? (
                            <IoMdStar size={30} />
                        ) : value >= i - 0.5 ? (
                            <IoIosStarHalf size={30} />
                        ) : (
                            <IoIosStarOutline size={30} />
                        )}
                    </span>
                ))}
            </div>
            <div>
                {text && (
                    <h2 className="font-bold text-xl bg-slate-300 py-1 px-3 rounded-full">
                        {text}
                    </h2>
                )}
            </div>
        </div>
    );
};
export default Rating;
