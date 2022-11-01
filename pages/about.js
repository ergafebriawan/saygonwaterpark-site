import AboutCompany from "../components/AboutCompany";
import KontakKami from "../components/KontakKami";
import Template from "../components/Template";

export default function About(){
    return(
        <>
        <Template title_page="About & Contact" active_page="about">
            <section>
                <AboutCompany/>
                <KontakKami/>
            </section>
        </Template>
        </>
    );
}