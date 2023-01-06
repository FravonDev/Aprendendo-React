import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Pessoa from "./components/Pessoa";
import SayMyName from "./components/SayMyname";
import Frase from "./components/Frase";

function App() {
  return (
    <div className="App">
      <h1>Testando Css</h1>
      <Frase/>
      <Frase/>
      <SayMyName name="Fravon"/>
      <HelloWorld/>
      <Pessoa profissao="Desenvolvedor Web Fullstack" nome="Fravon" idade="22" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
