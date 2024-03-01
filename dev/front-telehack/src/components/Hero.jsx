import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import woman from "../assets/Vector3.png";
import Navbar2 from "./Navbar2";
import OfferCard from "./OfferCard";
import idoom from "../assets/idoomFix.png";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "./Navbar";
import Navbar3 from "./Navbar3";

const Hero = () => {
    return (
        <div className="hero">
            <Navbar />
            <div className="hero-details">
                <div className="left">
                    <h2>Algeria Telecom...</h2>
                    <p>Your Gateway to seamless connectivity</p>
                    <button type="submit">
                        <em>Discover</em>
                    </button>
                </div>
                <div className="right">
                    <img src={woman} alt="" />
                </div>
            </div>
            <div className="offers">
                <h2>Recommended offers</h2>
                <CardContainer>
                    <Card
                        title="Idoom FIXE"
                        img="/idoom.png"
                        shadow="FIXE"
                        link="DISCOVER"
                        shadowStyle={{ left: "1.63rem" }}
                    />
                    <Card
                        title="Idoom 4GLITE"
                        img="/idoom.png"
                        shadow="4G"
                        link="DISCOVER"
                        shadowStyle={{ top: "38%" }}
                    />
                    <Card
                        title="Idoom FIXE"
                        img="/idoom.png"
                        shadow="FIXE"
                        link="DISCOVER"
                        shadowStyle={{ left: "1.63rem" }}
                    />
                    <Card
                        title="Idoom FIXE"
                        img="/idoom.png"
                        shadow="4G"
                        link="DISCOVER"
                        shadowStyle={{ top: "38%" }}
                    />
                    <Card
                        title="Idoom 4G"
                        img="/idoom.png"
                        shadow="4G"
                        link="DISCOVER"
                    />
                </CardContainer>
            </div>
            <Footer />
        </div>
    );
};

export default Hero;
