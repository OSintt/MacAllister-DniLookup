import Dni from "../models/Dni";
import getToken from "../lib/getToken";
import axios from "axios";
import getIDARG from "../lib/getIDARG";
import getPDF from "../lib/getPDF";



const getDni = async (req, res) => {
  const { id, sexo } = req.params;
  let dni = await Dni.findOne({ dni: id, sexo }).select("-id -v");
  if (!dni) {
    const { data } = await axios.get(
      `http://150.136.1.69:8011/apidatos/porDniSexo.php?dni=${id}&sexo=${sexo}`,
      {
        headers: {
          Authorization: await getToken(),
        },
      }
    );
    const {
      cuil,
      nombres,
      apellido,
      ejemplar,
      emision,
      id_ciudadano,
      id_tramite_principal,
      id_tramite_tarjeta_reimpresa,
      fecha_nacimiento,
      fecha_fallecimiento,
      mensaje_fallecido,
      vencimiento,
      calle,
      numero,
      piso,
      departamento,
      monoblock,
      barrio,
      codigo_postal,
      ciudad,
      municipio,
      provincia,
      pais,
    } = data;

    dni = new Dni({
      dni: id,
      sexo,
      cuil,
      nombres,
      apellido,
      id_ciudadano,
      fecha_nacimiento,
      id_tramite_principal,
      id_tramite_tarjeta_reimpresa,
      vencimiento,
      fecha_fallecimiento,
      mensaje_fallecido,
      calle,
      numero,
      piso,
      ejemplar,
      emision,
      departamento,
      monoblock,
      barrio,
      codigo_postal,
      ciudad,
      municipio,
      provincia,
      pais,
      pdf147: getPDF(
        cuil,
        id_tramite_principal,
        ejemplar,
        id,
        sexo,
        nombres,
        apellido,
        fecha_nacimiento,
        vencimiento
      ),
      idarg: getIDARG(
        id,
        apellido,
        nombres,
        sexo,
        fecha_nacimiento,
        vencimiento
      ),
    });
    await dni.save();
  }
  return res.status(200).json({ status: 200, dni });
};

module.exports = {
  getDni,
};
