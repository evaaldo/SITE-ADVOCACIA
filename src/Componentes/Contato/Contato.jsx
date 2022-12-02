import './Contato.css'

import { FaInstagramSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { FiMail } from 'react-icons/fi'
import { BsTelephoneFill } from 'react-icons/bs'


export default function Contato() {

    return(
        <div className="contato">
            <div className='contato__info'>
                <h4 className='info__subtitulo'>Escritório</h4>
                <h2 className='info__titulo'>Contato</h2>
                <div className='linha linhacontato'></div>
                <div className='info__itens'>
                    <div className='info__item'>
                        <HiLocationMarker/>
                        <p className='item-contato'>Rua ou avenida, endereço completo</p>
                    </div>
                    <div className='info__item'>
                        <BsTelephoneFill/>
                        <p className='item-contato'>(85) 9.9612.8272</p>
                    </div><div className='info__item'>
                        <FiMail/>
                        <p className='item-contato'>nome@escritorio.com.br</p>
                    </div>
                </div>
                <div className='linha linhacontato'></div>
                <h2 className='contato__titulo'>Redes sociais</h2>
                <div className='info__redes-sociais'>
                    <a className='info__links' href='.'><FaFacebookSquare size={30} /></a>
                    <a className='info__links' href='.'><FaInstagramSquare size={30} /></a>
                    <a className='info__links' href='.'><FaLinkedin size={30} /></a>
                </div>
            </div>
            <div className='contato__talk'>
                <h4 className='talk__subtitulo'>Sem compromisso</h4>
                <h2 className='talk__titulo'>Fale conosco</h2>
                <input className='nome' type='text' placeholder='Nome completo'></input>
                <input className='numero' type='text' placeholder='Número'></input>
                <input className='email' type='text' placeholder='E-mail'></input>
                <input className='mensagem' type='text' placeholder='Mensagem'></input>
                <button className='talk__botao'>ENVIAR</button>
            </div>
        </div>
    )

}