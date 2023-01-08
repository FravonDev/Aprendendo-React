function OutraLista({ itens }) {
  return (
    <>
      <h3>Outra lista!</h3>
      { itens.length > 0 ? (
      itens.map((item, index) => (
        <p key={index}> {item}</p>
      ))) : (
        <p>Não há items na lista</p>
      )

    }
    </>
  );
}
export default OutraLista;
