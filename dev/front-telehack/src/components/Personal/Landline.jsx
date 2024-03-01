import "../../styles/Personal.css";
import Card from "../Card";
import CardContainer from "../CardContainer";
import ImageWrapper from "../ImageWrapper";
import NavServices from "../NavServices";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Landline() {
    return (
        <>
            <Navbar style={{ width: "99vw", background: "#478df5" }} />
            <article className="herox">
                <section>
                    <h1>Personal Services</h1>
                    <NavServices />
                    <CardContainer>
                        <Card
                            title="Idoom FIXE"
                            img="/idoom.png"
                            shadow="FIXE"
                            link="DISCOVER"
                            shadowStyle={{ left: "1.63rem" }}
                        />
                    </CardContainer>
                </section>
                <section>
                    <ImageWrapper img="/img1.jpg" alt="landline" />
                </section>
            </article>
            <Footer />
        </>
    );
}
