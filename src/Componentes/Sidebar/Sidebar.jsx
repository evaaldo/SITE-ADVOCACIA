import './Sidebar.css'

const Sidebar = () => {

    return(
        <div className='sidebar'>
            <h3 className='cabecalho__item-titulo-mobile'>Categorias</h3>
            <a className='cabecalho__item-mobile' href='#home'>Home</a>
            <a className='cabecalho__item-mobile' href='#sobre-nos'>Sobre nós</a>
            <a className='cabecalho__item-mobile' href='#areas-de-atuacao'>Áreas de atuação</a>
            <a className='cabecalho__item-mobile' href='#equipe'>Equipe</a>
            <a className='cabecalho__item-mobile' href='#contato'>Contato</a>
        </div>
    )

}

export default Sidebar
