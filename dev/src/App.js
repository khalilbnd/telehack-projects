import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Landline from "./components/Landline";
import "./styles/index.css";
import Internet from "./components/Internet";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<div>Hi</div>}></Route>
                <Route path="/Landline" element={<Landline />}></Route>
                <Route path="/Internet" element={<Internet />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
