import { useRef, useState } from "react";
import "../styles/CardContainer.css";

export default function CardContainer({ children }) {
    const container = useRef(null);
    const [current, setCurrent] = useState(0);
    const pagination = Math.ceil(children.length / 2);

    return (
        <div className="cardWrapper">
            <div className="cardContainer" ref={container}>
                {children}
            </div>
            {children.length > 2 && (
                <>
                    <div
                        onClick={() => {
                            container.current.scrollLeft -=
                                container.current.offsetWidth - 24;
                            setCurrent(Math.max(current - 1, 0));
                        }}
                        className="controller left"
                    ></div>
                    <div
                        onClick={() => {
                            container.current.scrollLeft +=
                                container.current.offsetWidth + 24;
                            setCurrent(Math.min(current + 1, pagination - 1));
                        }}
                        className="controller right"
                    ></div>
                </>
            )}
            {pagination >= 1 && (
                <div className="pagination">
                    {[...Array(pagination)].map((_, index) => (
                        <div
                            key={index}
                            className={`ellipse ${
                                current === index ? "active" : ""
                            }`}
                            onClick={() => {
                                container.current.scrollLeft =
                                    container.current.offsetWidth * index;
                                setCurrent(index);
                            }}
                        ></div>
                    ))}
                </div>
            )}
        </div>
    );
}
