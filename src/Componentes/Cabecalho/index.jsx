import { RiInstagramFill } from 'react-icons/ri'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { RiLinkedinBoxFill } from 'react-icons/ri'
import { RiTwitterFill } from 'react-icons/ri'
import { RiPhoneFill } from 'react-icons/ri'

import './Cabecalho.css'

export default function Cabecalho() {

    return(

        <header>
            <div className="contato-topo">
                <p className="fone-topo">(85) 9.9612.8272</p>
                <div className="redes-topo">
                    <a className='redes' href="."><RiInstagramFill size={28}/></a>
                    <a className='redes' href="."><RiFacebookBoxFill size={28}/></a>
                    <a className='redes' href="."><RiLinkedinBoxFill size={28}/></a>
                    <a className='redes' href="."><RiTwitterFill size={28}/></a>
                </div>
            </div>
            <div className='linha'></div>
            <div className='cabecalho'>
                <div className='cabecalho__links'>
                    <h1 className='cabecalho__logo'>LOGOMARCA</h1>
                    <div className='cabecalho__itens'>
                        <a className='cabecalho__item' href='.'>Home</a>
                        <a className='cabecalho__item' href='.'>Sobre nós</a>
                        <a className='cabecalho__item' href='.'>Áreas de atuação</a>
                        <a className='cabecalho__item' href='.'>Equipe</a>
                        <a className='cabecalho__item' href='.'>Contato</a>
                    </div>
                    <a href='.' className='cabecalho__botao'>Fale conosco</a>
                </div>
                <div className='cabecalho__texto'>
                    <h1 className='cabecalho__titulo'>Transformando problemas em soluções</h1>
                    <h3 className='cabecalho__subtitulo'>Comprometidos em ajudar pessoas</h3>
                    <button className='cabecalho__botao botao-fone'><RiPhoneFill/> (85) 9.9612.8272</button>
                </div>
            </div>
        </header>

    )

}