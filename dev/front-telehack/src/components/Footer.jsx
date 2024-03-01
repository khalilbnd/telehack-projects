import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Vector() {
    return (
        <footer>
            <img src="/vector.svg" alt="landline" />
            <section>
                <ul>
                    <li className="title">About Algeria Telecom</li>

                    <li>
                        <Link to="/home#about" alt="Who We Are">
                            Who We Are{" "}
                        </Link>
                    </li>
                    <li>
                        <Link to="/home#info" alt="President and CEO message">
                            President and CEO message{" "}
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className="title">Personal</li>

                    <li>
                        <Link to="/Personal/Internet" alt="IDOOM FIXE">
                            IDOOM FIXE{" "}
                        </Link>
                    </li>
                    <li>
                        <Link to="/Personal/Internet" alt="IDOOM FIBRE">
                            IDOOM FIBRE{" "}
                        </Link>
                    </li>
                    <li>
                        <Link to="/Personal/Internet" alt="IDOOM ADSL">
                            IDOOM ADSL{" "}
                        </Link>
                    </li>
                    <li>
                        <Link to="/Personal/Internet" alt="IDOOM 4GLTE">
                            IDOOM 4GLTE{" "}
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className="title">Business</li>

                    <li>
                        <Link to="/Business/Internet" alt="IDOOM FIXE">
                            IDOOM FIXE{" "}
                        </Link>
                    </li>
                    <li>
                        <Link to="/Business/Internet" alt="IDOOM FIBRE">
                            IDOOM FIBRE{" "}
                        </Link>
                    </li>
                    <li>
                        <Link to="/Business/Internet" alt="IDOOM ADSL">
                            IDOOM ADSL{" "}
                        </Link>
                    </li>
                    <li>
                        <Link to="/Business/Internet" alt="IDOOM 4GLTE">
                            IDOOM 4GLTE{" "}
                        </Link>
                    </li>
                </ul>
            </section>
            <section>
                <p>© 2024 Algeria Telecom</p>
            </section>
        </footer>
    );
}
