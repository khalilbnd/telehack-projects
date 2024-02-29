import { Link } from "react-router-dom";
import "../styles/Card.css";

export default function Card({
    title,
    img,
    title2,
    title2Style,
    shadow,
    link,
    shadowStyle,
}) {
    return (
        <div className="card">
            <p>{title}</p>
            {img && <img src={img} />}
            {title2 && <h1 style={title2Style}>{title2}</h1>}
            <span style={shadowStyle}>{shadow}</span>
            <Link to="/" className="btn">
                {link}
            </Link>
        </div>
    );
}
