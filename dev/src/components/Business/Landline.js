import Card from "../Card";
import CardContainer from "../CardContainer";
import NavServices from "../NavServices";
import "../../styles/Business.css";

export default function Landline() {
    return (
        <article>
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
                        title="Idoom FIXE"
                        img="/idoom.png"
                        shadow="FIXE"
                        link="DISCOVER"
                    />
                </CardContainer>
            </section>
        </article>
    );
}
