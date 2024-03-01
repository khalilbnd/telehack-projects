import Card from "../Card";
import CardContainer from "../CardContainer";
import NavServices from "../NavServices";
import "../../styles/Business.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Internet() {
    return (
        <>
            <Navbar style={{ width: "99vw", background: "#478df5" }} />
            <article id="bus">
                <section className="heroBusiness">
                    <div className="banner"></div>
                    <div className="banner-2"></div>
                    <h1>Business Services</h1>
                    <p>
                        Where Connectivity meets
                        <br />
                        Innovation !
                    </p>
                </section>
                <section className="offerContainer">
                    <NavServices />
                    <CardContainer addPagination={false}>
                        <Card
                            title="STARTUP"
                            title2="startup "
                            shadow="S"
                            link="DISCOVER"
                            shadowStyle={{
                                fontSize: "15rem",
                                top: "8%",
                                left: "25%",
                            }}
                        />
                        <Card
                            title="BIG BUSINESS"
                            title2="BIG-BUSINESS "
                            title2Style={{ fontSize: "2.5rem" }}
                            shadow="B"
                            link="DISCOVER"
                            shadowStyle={{
                                fontSize: "15rem",
                                top: "9%",
                                left: "25%",
                            }}
                        />
                        <Card
                            title="Idoom FIBRE PRO"
                            title2="FIBRE PRO"
                            shadow="FIBRE"
                            link="DISCOVER"
                            shadowStyle={{ fontSize: "6rem" }}
                        />
                        <Card
                            title="MOOHTARIF"
                            title2="MOOHTARIF"
                            title2Style={{ fontSize: "3rem" }}
                            shadow="M"
                            link="DISCOVER"
                            shadowStyle={{
                                fontSize: "15rem",
                                top: "9%",
                                left: "20%",
                            }}
                        />
                        <Card
                            title="ADSL PRO"
                            title2="ADSL PRO"
                            shadow="ADSL"
                            link="DISCOVER"
                            shadowStyle={{ fontSize: "6rem" }}
                        />
                        <Card
                            title="RMS"
                            title2="RMS"
                            title2Style={{ fontSize: "6.25rem" }}
                            shadow="R"
                            link="DISCOVER"
                            shadowStyle={{
                                fontSize: "15rem",
                                top: "9%",
                            }}
                        />
                    </CardContainer>
                </section>
            </article>
            <Footer />
        </>
    );
}
