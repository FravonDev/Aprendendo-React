import { useState } from "react";

function Condicional() {
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }
    function limparEmail(){
      setUserEmail('')
    }

    const [email, setEmail] = useState('')
    const [userEmail, setUserEmail] = useState('')
  return (
    <div>
      <h2>Cadastre o seu email</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu email"
          name="email"
          id="email"
          onChange={(e)=> setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>Enviar email</button>
      </form>
      {userEmail && (
        <div>
            o E-mail do usuário é {userEmail}
            <button onClick={limparEmail}>Limpar email</button>
        </div>
      )}
    </div>
  );
}
export default Condicional;
