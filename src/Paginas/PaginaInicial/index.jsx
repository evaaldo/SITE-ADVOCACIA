import AreaDeAtuacao from "../../Componentes/AreasDeAtuacao";
import Banner from "../../Componentes/Banner/Banner";
import Cabecalho from "../../Componentes/Cabecalho";
import Contato from "../../Componentes/Contato/Contato";
import Diferenciais from "../../Componentes/Diferenciais/Diferenciais";
import Equipe from "../../Componentes/Equipe/Equipe";
import Rodape from "../../Componentes/Rodape/Rodape";
import SobreNos from "../../Componentes/SobreNos";

export default function PaginaInicial() {

    return(
        <>
            <Cabecalho/>
            <SobreNos/>
            <AreaDeAtuacao/>
            <Diferenciais/>
            <Equipe/>
            <Banner/>
            <Contato/>
            <Rodape/>
        </>
    )

}