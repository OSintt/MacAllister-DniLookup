import "../styles/css/error.css";
import croque from "../assets/cro-que.png";

export const Error = () => {
  return (
    <div className="error">
      <center>
        <img src={croque} className="down" alt="down" />
        <h3>No existe la pagina que estas buscando.</h3>
      </center>
    </div>
  );
};
