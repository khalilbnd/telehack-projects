import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import search from "../assets/mynaui_search.png";
import user from "../assets/Rectangle.png";

export default function Navbar3() {
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/loginForm">Services</Link>
                    </li>
                    <li>
                        <Dropdown
                            button={<Link to="#">Products</Link>}
                            children={
                                <div className="dropdown mt-12 border-spacing-1 [&>a]:border [&>a]:border-black">
                                    <Link className="text-zinc-800" to="#">
                                        {" "}
                                        Personal
                                    </Link>
                                    <Link className="text-zinc-800" to="#">
                                        {" "}
                                        Business
                                    </Link>
                                </div>
                            }
                        ></Dropdown>
                    </li>
                    <li>
                        <Link to="#">E-Payment</Link>
                    </li>
                </ul>
                <div className="nav-user">
                    <img src={search} alt="" />
                    <Link to="/loginForm" className="main-btn">
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
}

function useOutsideAlerter(ref, setX) {
    React.useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setX(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setX]);
}

const Dropdown = (props) => {
    const { button, children, classNames, animation } = props;
    const wrapperRef = React.useRef(null);
    const [openWrapper, setOpenWrapper] = React.useState(false);
    useOutsideAlerter(wrapperRef, setOpenWrapper);

    return (
        <div ref={wrapperRef} className="relative flex">
            <div
                className="flex"
                onMouseDown={() => setOpenWrapper(!openWrapper)}
            >
                {button}
            </div>
            <div
                className={`${classNames} absolute z-10 ${
                    animation
                        ? animation
                        : "origin-top-right transition-all duration-300 ease-in-out"
                } ${openWrapper ? "scale-100" : "scale-0"}`}
            >
                {children}
            </div>
        </div>
    );
};

//

export function Example() {
    return (
        <Dropdown
            button={
                <button className="bg-brand-500 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200 rounded-xl px-5 py-3 text-base font-medium text-white transition duration-200 dark:text-white">
                    Dropdown Menu
                </button>
            }
            children={
                <div className="flex h-max w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat pb-4 shadow-[0_20px_25px_-5px] shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                    <div className="mt-3 ml-4">
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-navy-700 dark:text-white">
                                👋 Hey, Adela
                            </p>{" "}
                        </div>
                    </div>
                    <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

                    <div className="mt-3 ml-4 flex flex-col">
                        <a
                            href=" "
                            className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                        >
                            Profile Settings
                        </a>
                        <a
                            href=" "
                            className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                        >
                            Newsletter Settings
                        </a>
                        <a
                            href=" "
                            className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                        >
                            Log Out
                        </a>
                    </div>
                </div>
            }
            classNames={"py-2 bottom-[-30px] -left-[180px] w-max"}
        />
    );
}
