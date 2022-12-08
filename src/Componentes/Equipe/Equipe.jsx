import './Equipe.css'

import usuario from './no-pf.png'

export default function Equipe() {

    return(
        <div className="equipe" id='equipe'>
            <div className='equipe-desktop'>
                <h1 className='equipe__titulo'>Nossa equipe</h1>
                <div className='equipe__itens'>
                    <div className='equipe__item'>
                        <img className='equipe__imagem' src={usuario}></img>
                        <h4 className='equipe__nome'>Fulano de Tal</h4>
                        <p className='equipe__cargo'>ADVOGADA</p>
                        <p className='equipe__descricao'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
            </div>
            <div className='equipe-mobile'>
                <h1 className='equipe__titulo'>Nossa equipe</h1>
                <div className='equipe__itens'>
                    <div className='equipe__item'>
                        <img className='equipe__imagem' src={usuario}></img>
                        <h4 className='equipe__nome'>Fulano de Tal</h4>
                        <p className='equipe__cargo'>ADVOGADA</p>
                        <p className='equipe__descricao'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
            </div>
        </div>
    )

}