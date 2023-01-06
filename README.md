<aside>
💡 Estas são minhas anotações sobre o curso de React do Matheus Battisti - Hora de Coda

</aside>

Aprender react e ao final do curso vamos criar uma aplicação Fullstack com JSON server e React

react é uma **biblioteca,** que serve para criar interfaces do usuário (UI)

o react é usado para criar **SPAs** (Single Page Application), também é baseado em componentes e Utiliza **JSX** para renderizar HTML.

react usa **Virtual DOM** para realizar as alterações na tela.

- Para usar react precisamos do Node e npm instalados
- para instalar o React vamos utilizar a ferramenta **Create React App** (**CRA**)
- esta ferramenta também otimiza o App gerado para produção

para iniciar um projeto use o comando

```jsx
npx create-react-app nome-app
```

O React usa **JSX**, que como um **HTML** que dentro  JavaScript, com ele podemos:

escrever código HTML dentro do código javascript, Inserir valores em atributos de tags, interpolar váriaveis, salvar HTML dentro de variaveis, executar funções em **JSX**, renderizar variáveis, executar funções usar loops, receber dados de uma api e renderizar na tela.

Um **componente** em react, basicamente é uma função que retorna JSX, 

onde podemos fazer varias coisa, inclusive criar funçoes dentro da nossa função,

lembre-se que o **JSX** só pode entregar um elemento então caso queiramos usar vários elementos, simplismente colocamos eles dentro de uma div

```jsx
import "./App.css";

function App() {
  const url = "https://via.placeholder.com/150";
  const name = "fravon";

  function sum(a, b) {
    return a + b;
  }
  return (
    <div className="App">
      <h1>App com react</h1>
      <p> Eae {name} </p>
      <p> Soma {sum(3, 3)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  );
}

export default App;
```

**componentes**

Componentes  nos permitem dividir a aplicação em partes, o que nos trás vários beneficios como reutilização de código, facilita a manutenção, como os componentes são isolados fica mais facil manter e atualizar o código ao longo do tempo.

Utilizando componentes, o código fica mais legível e fácil de entender, o que facilita o processo de desenvolvimento em geral, e ainda é facil de testar isoladamente, isso facilita o processo de testes e garante que o aplciativo esteja sempre funcionando corretamente.

Os componentes renderizam JSX, assim como o App.js que é o nosso componente principal, grande parte dos componentes vão estar nele.

precisamos criar um arquivo de componente e depois importa-lo para onde precisar utilizar

normalmente ficam em uma **pasta** chamada **components**

quando criar um componente lembre de deixar a primeira letra Maiúscula (**Pascal case**)

Então na pasta components, crie o arquivo:

**HelloWorld.js**

Dentro desse arquivos vamos criar uma função e exportar

```jsx
function HelloWorld(){
    return (
        <div>Montamos um component</div>
    );
};

export default HelloWorld;
```

depois vamos usar o nosso componente

```jsx
import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const url = "https://via.placeholder.com/150";
  const name = "fravon";

  function sum(a, b) {
    return a + b;
  }
  return (
    <div className="App">
      <h1>App com react</h1>
      <p> Eae {name} </p>
      <p> Soma {sum(3, 3)}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld/>
    </div>
  );
}

export default App;
```

**Props**

As props são valores passados para componentes, podemos deixar os componentes dinamicos, ou seja nosso component pode mudar por causa do valor da prop.

o valor poder ser passado como um atributo na chamada do componente, precisa ser resgatado dentro de  uma propriedade/argumento chamada props e as props são somente de leitura.

criamos um component com o nome SayMyName, que espera a prop chamada name

```jsx
function SayMyName(props){
    return(
        <div>
            <p>Fala ai {props.name}, suave?</p>
        </div>
    );
}
export default SayMyName;
```

depois disso é só importar nosso componente SayMyName, passar a prop name como se fosse atributo src da tag img e usar:

```jsx
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyname";

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName name="Fravon"/>
    </div>
  );
}

export default App;
```

Neste outro component chamado “**Pessoa”** utilize Destructuring, para o código um pouco menor

```jsx
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
```

depois é só importar o componente e usar

```jsx
function App() {
  return (
    <div className="App">
      <SayMyName name="Fravon"/>
      <HelloWorld/>
      <Pessoa profissao="Desenvolvedor Web Fullstack" nome="Fravon" idade="22" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
```

**Estilização com css**

O css também pode ser utilizado de forma global, o arquivo index.css vem na instalação do CRA,

e com ele podemos fazer estilização global.

mas é muito interessante estilizara nivel de componente, pois em arquivos maiores é muito dificil trabalhar com o css global, então usar css a nivel de componentes além de ser mais produtivo não temos problemas com sobreposição de estilos.

pra isso vamos usar o **CSS modules,** basta criar um arquivo como: Componente.module.css

Fique atento com o nome nos seletores: não use **frase-container** use ****************fraseContainer****************

pois não vai funcionar

após criar nosso estilo. devemos importar ele pro nosso componente. pra importar ele é igual fariamos com um componente, damos um nome e pegamos o seu diretório.

Desta forma podemos colocar o estilo usando ClassName usando o **JSX**

```jsx
import styles from "./Frase.module.css"
function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p>Este é um componente com uma frase</p>
        </div>
    )
}
export default Frase;
```