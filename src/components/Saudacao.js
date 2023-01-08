function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `Olá ${algumNome}, você tá bem?`
    }    
    return (
        <div>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </div>
    )
}
export default Saudacao;