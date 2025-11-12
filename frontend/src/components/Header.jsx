const Header = () => {
    return (
        <div className="flex items-center justify-between bg-gray-800 text-white w-full flex-wrap py-6 px-6 fixed top-0 left-0">
            <a href="/">
                {" "}
                <h1 className="font-bold text-3xl uppercase tracker-wider ">rst store</h1>
            </a>

            <ul className="flex items-center justify-between gap-10">
                <li className="font-semibold text-2xl">Login</li>
                <li className="font-semibold text-2xl">Cart</li>
            </ul>
        </div>
    );
};
export default Header;
