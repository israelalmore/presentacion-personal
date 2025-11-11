import { useState } from "react";
import Informacion from "./componentes/molecules/Informacion";
import messi from "./assets/messi.jpg";
import RedesSociales from "./componentes/molecules/RedesSociales";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Informacion
        imagen={messi}
        nombre={"Israel Alcántara"}
        nacimiento={"Nací el 23 de noviembre del 2006"}
      />

      <div className="links">
        <RedesSociales
          link={"https://www.instagram.com/israel.almore/"}
          nombre={"Instagram"}
        />

        <RedesSociales
          link={"https://www.youtube.com/@blackzy6133"}
          nombre={"Youtube"}
        />
      </div>
    </>
  );
}

export default App;
