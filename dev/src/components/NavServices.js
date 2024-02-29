import { Link, useLocation } from "react-router-dom";
import "../styles/NavServices.css";

export default function NavServices() {
    const { pathname } = useLocation();
    return (
        <div className="btnContainer">
            <Link
                to={"/" + pathname.split("/")[1] + "/Landline"}
                className={`btn ${
                    pathname.includes("/Landline") ? "active" : " "
                }`}
            >
                Landline
            </Link>
            <Link
                to={"/" + pathname.split("/")[1] + "/Internet"}
                className={`btn ${
                    pathname.includes("/Internet") ? "active" : " "
                }`}
            >
                Internet
            </Link>
            <Link
                to={"/" + pathname.split("/")[1] + "/Services"}
                className={`btn ${
                    pathname.includes("/Services") ? "active" : " "
                }`}
            >
                Services
            </Link>
        </div>
    );
}
