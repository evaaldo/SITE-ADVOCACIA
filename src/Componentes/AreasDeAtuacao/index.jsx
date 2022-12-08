import './AreaDeAtuacao.css'
import familia from './direito-familia.png'
import imobiliario from './direito-imobiliario.jpg'

export default function AreaDeAtuacao() {

    return(
        <div className="areadeatuacao" id='areas-de-atuacao'>
            <div className='areadeatuacao-desktop'>
                <h4 className="areadeatuacao__subtitulo">Alguns de nossos serviços</h4>
                <h1 className="areadeatuacao__titulo">Áreas de atuação</h1>
                <div className="areadeatuacao__areas">
                    <div className="areadeatuacao__area">
                        <img className='areadeatuacao__imagem' src={familia}></img>
                        <h2 className="area__titulo">DIREITO DA FAMÍLIA</h2>
                        <p className="area__descricao">Tratamos das relações familiares e das obrigações e direitos decorrentes dessas relações, ou seja, buscamos regular e estabelecer as normas de convivência familiar.</p>
                    </div>
                    <div className="areadeatuacao__area">
                        <img className='areadeatuacao__imagem' src={imobiliario}></img>
                        <h2 className="area__titulo">DIREITO IMOBILIÁRIO</h2>
                        <p className="area__descricao">tratamos e regulamentamos vários aspectos da vida privada, tais quais o condomínio, o aluguel, a compra e venda de imóveis, a usucapião e os financiamentos da casa própria.</p>
                    </div>
                </div>
            </div>
            <div className='areadeatuacao-mobile'>
                <h4 className='areadeatuacao-mobile__subtitulo'>Alguns dos nossos serviços</h4>
                <h1 className='areadeatuacao-mobile__titulo'>Áreas de atuação</h1>
                <img className='areadeatuacao-mobile__imagem' src={familia}></img>
                <h4 className='areadeatuacao-mobile__area'>DIREITO DA FAMÍLIA</h4>
                <p className='areadeatuacao-mobile__descricao'>Tratamos das relações familiares e das obrigações e direitos decorrentes dessas relações, ou seja, buscamos regular e estabelecer as normas de convivência familiar.</p>
                <img className='areadeatuacao-mobile__imagem' src={imobiliario}></img>
                <h4 className='areadeatuacao-mobile__area'>DIREITO IMOBILIÁRIO</h4>
                <p className='areadeatuacao-mobile__descricao'>tratamos e regulamentamos vários aspectos da vida privada, tais quais o condomínio, o aluguel, a compra e venda de imóveis, a usucapião e os financiamentos da casa própria.</p>
            </div>
        </div>
    )

}