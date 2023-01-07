import "./App.css";
import Evento from "./components/Evento";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <h1>Testando Css</h1>
      <h1>Testando eventos!</h1>
      <Evento numero="1" />
    </div>
  );
}

export default App;
