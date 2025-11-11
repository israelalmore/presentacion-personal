function RedesSociales({ link, nombre }) {
  return (
    <>
      <div>
        <a href={link} target="_blank">
          {nombre}
        </a>
      </div>
    </>
  );
}

export default RedesSociales;
