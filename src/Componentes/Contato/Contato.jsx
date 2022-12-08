import './Contato.css'
import emailjs from '@emailjs/browser'

import { FaInstagramSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { FiMail } from 'react-icons/fi'
import { BsTelephoneFill } from 'react-icons/bs'
import { useState } from 'react'
import { RiContactsBookLine } from 'react-icons/ri'


export default function Contato() {

    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function sendEmail(e) {

        e.preventDefault()

        if(nome === '' || email === '' || numero === '' || mensagem === '') {
            alert('PREENCHA TODOS OS CAMPOS')
            return
        }

        const templatePrams = {
            from_name: nome,
            message: mensagem,
            email: email,
            number: numero
        }

        emailjs.send('service_te8ywie', 'template_rjp6bo2', templatePrams, 'gcQJkwh4AOZnT9zPf')
        .then((response) => {
            console.log('EMAIL ENVIADO', response.status, response.text)
            setEmail('')
            setNome('')
            setMensagem('')
            setNumero('')
        }, (err) => console.log('erro: ', err))

    }

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
                <form className='formulario' onSubmit={sendEmail}>  
                    <input className='nome' type='text' placeholder='Nome completo' onChange={(e) => setNome(e.target.value)} value={nome}></input>
                    <input className='numero' type='text' placeholder='Número' onChange={(e) => setNumero(e.target.value)} value={numero}></input>
                    <input className='email' type='text' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    <input className='mensagem' type='text' placeholder='Mensagem' onChange={(e) => setMensagem(e.target.value)} value={mensagem}></input>
                    <input value='Enviar' type='submit' className='talk__botao'></input>
                </form>
            </div>
        </div>
    )

}
