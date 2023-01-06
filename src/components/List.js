import Item from "./Item"

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Chevrolet" ano_lancamento={1985}/>
        <Item marca="Ford" ano_lancamento={1960}/>
        <Item marca="Honda" ano_lancamento={1990}/>
        <Item/>
      </ul>
    </>
  );
}
export default List;
