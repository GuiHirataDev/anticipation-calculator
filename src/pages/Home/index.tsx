import Logo from "./../../images/logo.png"
import { Link } from "react-router-dom"
import { MainHome } from "./styles"


export const HomePage = () => {
    return(
        <MainHome>
            <div className="textArea">
                <h2>Faça a simulação de sua antecipação.</h2>
                <p>de forma rápida e segura.</p>
                <Link to={"/calculator"}>Iniciar</Link>
            </div>
            <div className="imageArea">
                <img src={Logo} alt="logo-da-aplicação" />
            </div>
        </MainHome>
    )
}