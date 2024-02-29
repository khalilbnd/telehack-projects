import { Link, useLocation } from "react-router-dom";
import "../styles/NavServices.css";

export default function NavServices() {
    const { pathname } = useLocation();
    return (
        <div className="btnContainer">
            <Link
                to="/Landline"
                className={`btn ${pathname === "/Landline" ? "active" : " "}`}
            >
                Landline
            </Link>
            <Link
                to="/Internet"
                className={`btn ${pathname === "/Internet" ? "active" : " "}`}
            >
                Internet
            </Link>
            <Link
                to="/Services"
                className={`btn ${pathname === "/Services" ? "active" : " "}`}
            >
                Services
            </Link>
        </div>
    );
}
