import Button from "./eventos/Button";

function Evento({numero}){
    function primeiroEvento(){
        alert(`Ativando primeiro evento!`)
    }
    function segundoEvento(){
        alert(`Ativando segundo evento!`)
    }
    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={primeiroEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}
export default Evento;