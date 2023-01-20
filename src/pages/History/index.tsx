import Image from "./../../images/image.png"
import { MainHistory } from "./style"
import { SmallButton } from "./../MainContent/styles"

import { BiLeftArrowAlt } from "react-icons/bi"

export const HistoryPage = () => {
    return (
        <MainHistory>
            <SmallButton to={"/calculator"}>
                <p><BiLeftArrowAlt /></p>
            </SmallButton>
            <img src={Image} alt="faixas de construção" />
            <h1>Página em desenvolvimento...</h1>
        </MainHistory>
    )
}
