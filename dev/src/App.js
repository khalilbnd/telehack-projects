import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import PersonalLandline from "./components/Personal/Landline";
import PersonalInternet from "./components/Personal/Internet";
import BusinessInternet from "./components/Business/Internet";
import BusinessLandline from "./components/Business/Landline";
import "./styles/index.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<div>Hi</div>} />
                <Route
                    path="Personal/Landline"
                    element={<PersonalLandline />}
                />
                <Route
                    path="Personal/Internet"
                    element={<PersonalInternet />}
                />
                <Route
                    path="Business/Landline"
                    element={<BusinessLandline />}
                />
                <Route
                    path="Business/Internet"
                    element={<BusinessInternet />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
