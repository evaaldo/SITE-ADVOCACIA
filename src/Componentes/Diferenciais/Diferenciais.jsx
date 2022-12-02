import './Diferenciais.css'

import { RiMedalFill } from 'react-icons/ri'
import { RiStarFill } from 'react-icons/ri'
import { RiUser3Fill } from 'react-icons/ri'
import { FaClock } from 'react-icons/fa'
import { GrPersonalComputer } from 'react-icons/gr'
import { BsHeartFill } from 'react-icons/bs'

export default function Diferenciais() {

    return(
        <div className='diferenciais'>
            <h4 className='diferenciais__subtitulo'>Motivos para nos escolher</h4>
            <h1 className='diferenciais__titulo'>Alguns diferenciais</h1>
            <div className='diferenciais__itens'>
                <div className='diferenciais__item'>
                    <div className='item'>
                        <RiMedalFill size={30}/>
                        <h4 className='diferenciais__subtitulo'>Formação qualificada</h4>
                    </div>
                    <div className='item'>
                        <RiStarFill size={30}/>
                        <h4 className='diferenciais__subtitulo'>Casos de sucesso</h4>
                    </div>
                    <div className='item'>
                        <RiUser3Fill size={30}/>
                        <h4 className='diferenciais__subtitulo'>Zelo e cuidado</h4>
                    </div>
                </div>
                <div className='diferenciais__item'>
                    <div className='item'>
                        <FaClock size={30}/>
                        <h4 className='diferenciais__subtitulo'>Rápido atendimento</h4>
                    </div>
                    <div className='item'>
                        <GrPersonalComputer size={30}/>
                        <h4 className='diferenciais__subtitulo'>On-line ou presencial</h4>
                    </div>
                    <div className='item'>
                        <BsHeartFill size={30}/>
                        <h4 className='diferenciais__subtitulo'>Amamos direito</h4>
                    </div>
                </div>
            </div>
            <div className='linha linhaequipe'></div>
        </div>
    )

}