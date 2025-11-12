import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <div>
            <Header />
            <div className="mt-[82px] flex flex-col py-6 px-6">
                <HomeScreen/>
            </div>
            <Footer />
        </div>
    );
};
export default App;
