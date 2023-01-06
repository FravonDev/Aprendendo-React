function Pessoa({nome,idade,foto,profissao}) {
    return(
        <div>
            <img src={foto} alt={nome}/>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa;