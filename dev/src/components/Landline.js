import "../styles/Landline.css";
import Card from "./Card";
import CardContainer from "./CardContainer";
import ImageWrapper from "./ImageWrapper";
import NavServices from "./NavServices";

export default function Landline() {
    return (
        <article className="hero">
            <section>
                <h1>Personal Services</h1>
                <NavServices />
                <CardContainer>
                    <Card
                        title="Idoom FIXE"
                        img="idoom.png"
                        shadow="FIXE"
                        link="DISCOVER"
                        shadowStyle={{ left: "1.63rem" }}
                    />
                </CardContainer>
            </section>
            <section>
                <ImageWrapper img="img1.jpg" alt="landline" />
            </section>
        </article>
    );
}
