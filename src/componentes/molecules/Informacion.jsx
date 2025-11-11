function Informacion({ imagen, nombre, nacimiento }) {
  return (
    <>
      <div>
        <img src={imagen} />
        <header>
          <h3> {nombre} </h3>
        </header>
      </div>

      <article>
        <p> {nacimiento}</p>
      </article>
    </>
  );
}

export default Informacion;
