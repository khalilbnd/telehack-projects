import { Link } from "react-router-dom";
import "../styles/Card.css";

export default function Card({ title, img, shadow, link, shadowStyle }) {
    return (
        <div className="card">
            <p>{title}</p>
            <img src={img} />
            <span style={shadowStyle}>{shadow}</span>
            <Link to="/" className="btn">
                {link}
            </Link>
        </div>
    );
}
