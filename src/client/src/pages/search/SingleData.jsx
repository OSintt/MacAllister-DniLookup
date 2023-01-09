import { useEffect } from "react";

const datos_personales = [
  "cuil",
  "sexo", 
  "dni",
  "nombres",
  "apellido",
  "mensaje_fallecido",
  "fecha_nacimiento",
  "emision",
  "vencimiento",
  "emision",
  "id_tramite_principal",
  "pdf147",
  "idarg"

];

const domicilios = [
  "cuil",
  "sexo", 
  "dni",
  "nombres",
  "apellido",
  "mensaje_fallecido",
  "fecha_nacimiento",
  "emision",
  "vencimiento",
  "emision",
  "id_tramite_principal",
  "pdf147",
  "idarg",
  "id_tramite_tarjeta_reimpresa",
  "id_ciudadano",
  "fecha_fallecimiento",  
  "_id",
  "__v"
  

];

const SingleData = ({ name, data, filterArray }) => {
  useEffect(() => {
    console.log("hola");
    console.log(name, data);
  }, [name, data]);
  return (
    
    <div
      className={
        filterArray
          ? datos_personales.includes(name)
            ? "single-data-container"
            : "hidden"
          : domicilios.includes(name)
          ? "hidden"
          : "single-data-container"
      }
    >
      <div className="data-name">{name.replace(/_/g, " ")}</div>
      <div className="data">
        <pre>{ data ? data : "N/A"}</pre>
      </div>
    </div>
  );
};

export default SingleData;
