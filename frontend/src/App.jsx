import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className="mt-[82px] flex flex-col py-6 px-6">
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
};
export default App;
