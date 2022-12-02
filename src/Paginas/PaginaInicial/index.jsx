import AreaDeAtuacao from "../../Componentes/AreasDeAtuacao";
import Cabecalho from "../../Componentes/Cabecalho";
import Diferenciais from "../../Componentes/Diferenciais/Diferenciais";
import Equipe from "../../Componentes/Equipe/Equipe";
import SobreNos from "../../Componentes/SobreNos";

export default function PaginaInicial() {

    return(
        <>
            <Cabecalho/>
            <SobreNos/>
            <AreaDeAtuacao/>
            <Diferenciais/>
            <Equipe/>
        </>
    )

}