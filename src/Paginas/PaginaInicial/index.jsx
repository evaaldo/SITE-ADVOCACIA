import AreaDeAtuacao from "../../Componentes/AreasDeAtuacao";
import Cabecalho from "../../Componentes/Cabecalho";
import Diferenciais from "../../Componentes/Diferenciais/Diferenciais";
import SobreNos from "../../Componentes/SobreNos";

export default function PaginaInicial() {

    return(
        <>
            <Cabecalho/>
            <SobreNos/>
            <AreaDeAtuacao/>
            <Diferenciais/>
        </>
    )

}