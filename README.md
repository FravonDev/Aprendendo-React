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

**React Fragments**

Os react Fragments permitem a criação de um component sem elemeto pai

serve para deixar nos nós do DOM mais simples, pois 

ao invés de usar uma <div></div> vamos usar apenas <> </> 

Desta forma conseguimos retornar mais de um elemento com o **Fragment**

```jsx
function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li>Item 1</li>
                <li>item 2</li>
                <li>Item</li>
            </ul>
        </>
    )
}
```

**Avançando em Props**

Podemos definir tipos para as props, fazendo uma especie de validação, 

Definimos em um objeto camado propTypes no próprio componente

E também há a possibilidade de definir um valor padrão, utlizando o objeto defaultProps;

Neste exemplo, marca tem que ser do **tipo string** e **isRequired**, que significa que ele precisa daquela **prop** 

```jsx
import PropTypes from "prop-types";

function Item({ marca, lancamento }) {
  return (
    <>
      <li>
        {marca} - {lancamento}{}
      </li>
    </>
  );
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
}
export default Item;
```

Neste exemplo, esperamos que a marca tenhamos uma marca e caso não tenhamos, receberá o valor default usando defaultProps

```jsx
import PropTypes from "prop-types";

function Item({ marca, ano_lancamento }) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}{}
      </li>
    </>
  );
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0
}
export default Item;
```

**Eventos**

Os eventos no React são os mesmo eventos do DOM, temos eventos para responder a um click.

O evento é atrelado a uma atg que irá executa-lo

Geralemnte um método é atribuído ao evento

Este método deve ser criado no componente

Para usarmos evento é bem simples, basta chamar o evento dentro da tag assim:

 

```jsx
function Evento(){
    function meuEvento(){
        console.log('fui ativado!')
    }
    return (
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativaar</button>
        </div>
    )
}
export default Evento;
```

Lembre-se de não colocar parênteses, na chamada da função, senão ela será executada assim que a pagina carregar!

**useState**

useState é um dos hook do React

Com ele conseguimos manusear o estaod de um componente de forma simples;

Este hook funciona muito bem com eventos

Podemos atrelar um evento a mudança de estate;

Quando estamos trabalhando com formulários precisamos nos atentar com o atributo **for** da tag **label**

```jsx

<label for""></label>
```

o atributo for conflita com o React, então precisamos usar

```jsx
<label htmlFor=""></label>
```

Voltando ao state, como faço pra pegar os valores do meu form, que enviaremos para o backend, podiamos usar javascript mas se usarmos states é mais simples:

Precisamos apenas importar o useState do próprio react e usalo:

O **setName** é responsavel por atualizar o estado **name,** ou seja sem a função setName o valor de name continuaria sendo o mesmo.

```jsx
import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name)
    console.log("Cadastrou o usúario!");
  }

  const [name, setName] = useState('Fravon')
  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}
export default Form;

```

Métodos por props

OS métodos também pode sem passados por props.

Um componente filho pode ativar o método do seu ancestral, pode ser que eu tenha

A sintaxe é a mesma de uma props de dados: props.meuevento;

```jsx
import Button from "./eventos/Button";

function Evento({numero}){
    function meuEvento(){
        alert(`Ativando primeiro evento!`)
    }
    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
        </div>
    )
}
export default Evento;
```

Passamos a função como prop e  usamos a função no nosso componente Button

```jsx
function Button(props){
    return <button onClick={props.event}>{props.text}</button>
}
export default Button;
```

 

**Renderização por condição**

podemos alterar a exibição de um elemento usando if, esta ação é chamada renderização condicional, pra isso envolvemos as tags em chaves, como as chaves executam javascript, criamos nossa condição, é possivel usar o State para criar as condições.

Baseado em uma condição, vamos exibir um template ou outro

neste exempo aqui embaixo, **SE** o usuário enviou o email então renderize uma div com um texto + email

```jsx
import { useState } from "react";

function Condicional() {
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
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
          id="e
          mail"
          onChange={(e)=> setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>Enviar email</button>
      </form>
      {userEmail && (
        <div>
            o E-mail do usuário é {userEmail}
        </div>
      )}
    </div>
  );
}
export default Condicional;
```

Pense na seguinte situação,

Um site vai ter a tela de login, quando você fizer login aparece outros conteudos, e some a tela de login.

essa seria uma das milhoes de possibilidades que vamos experimentar!

**Renderização de listas**

Para renderizar uma lista vamos primeiramente precisar de objetos ou arrays

Depois utilizamos a função map, para percorrer cada os itens do array

podendo assim renderizar algo na tela

é possível unir operadores condicionais com renderização de listas

Aqui criamos um array com 3 valores, depois passamos esses valores pra nosso componente

```jsx
import "./App.css";
import OutraLista from "./components/OutraLista";

function App() {

  const meusItens = ['React', 'Vue','Angular']
  
  return (
    <div className="App">
      <h1>Renderização de listas!</h1>
      <OutraLista itens={meusItens} />
    </div>
  );
}

export default App;
```

Dentro do componente precisamos apenas receber nossos itens e depois usar o **JSX**

para renderizar cada um dos elemento com o método map

```jsx
function OutraLista({ itens }) {
  return (
    <>
      <h3>OutraLista Works!</h3>
      {itens.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
}
export default OutraLista;
```

Caso queiramos usar um id, o mais recomendado é usar o que vem do backend

Mas e se não tiver?

é bem simples ele tem a propriedade index por padrão

```jsx
function OutraLista({ itens }) {
  return (
    <>
      <h3>OutraLista Works!</h3>
      {itens.map((item, index) => (
        <p key={index}> {item}</p>
      ))}
    </>
  );
}
export default OutraLista;
```

E esse key? então o react pede que os itens tenham a **unique key** prop (se não colocar vai te mostrar um aviso no terminal)

o key serve pro react se achar e saber qual componente vai acontecer alguma coisa

State lift é uma tecnica para compartilhar o state

é normal varios componentes dependerem do mesmo state;

Imagine que um componente esteja trabalhando com um state, e precisamos usar esse state em outro component, pra isso devemos elevar ao nivel de um componente pai,

Então centralizamos o state no elemento pai e definimos quem usa e quem define (setState)

Ao invés da gente colocar nosso state no component, vamos colocalo no componente pai, neste caso é o App.js

Compartilhando do elemento pai para elementos filhos com state lift

```jsx
import "./App.css";
import SeuNome from "./components/SeuNome";
import { useState } from "react";

function App() {
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <p>{nome}</p>
    </div>
  );
}

export default App;
```

Agora ja conseguimos usar setters os valores em outros componentes.

Então também podemos usar getter para passar os valores em outros componentes não é mesmo?

```jsx
import "./App.css";
import SeuNome from "./components/SeuNome";
import { useState } from "react";
import Saudacao from "./components/Saudacao";

function App() {
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
```

Agora é so pegar o nome dom Destructuring e usar

```jsx
function Saudacao({nome}){
    return (
        <div><p>{nome}</p></div>
    )
}
export default Saudacao;
```

também podemos usar a renderização condicional, para que ele só mostre a saudação quando tiver um nome

```jsx
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
```

Agora vamos aprender sobre Roteamento com React Router

O react ROuter é um pacote para mudança de URLs da aplicação, podemos acessar outras views, sem reacarregar a página (Isso é incrível)

Trocando apenas uma parte do layout da aplicação, só mudam alguns componentes da views.

precisamos instalar o react Router e mudar algumas coisas em como o App é estruturado

```jsx
npm install react-router-dom
```

Importando os módulos e configurando

Dentro da tag Router ficarão nossas views e também os componentes que se repeten de view pra view como header e footer.

Agora vamos criar nossas rotas

```jsx
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {

  return (
	<BrowserRouter>
      <header>
          <nav>
            <Link to="/">Home</Link>
            <NavLink to="/empresa">Empresa</NavLink>
            <NavLink to="/contato">contato</NavLink>
          </nav>
      </header>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/empresa" element={<Empresa/>}></Route>
            <Route path="/contato" element={<Contato/>}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App;
```

Além disso vamos criar uma pasta **pages** no **src**

e criamos nossos componentes que neste caso são Empresa, Home e Contato

Agora que ja temos os componentes precisamos mostrar para o react que a pagina home é responsavel pelo nosso component Home,

Que a rota empresa é responsavel pelo componente empresa e que a pagina contato é repsonsavel pelo componenet contato