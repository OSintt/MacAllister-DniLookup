const getPDF = (
  cuil,
  id_tramite_principal,
  ejemplar,
  dni,
  sexo,
  nombre,
  apellido,
  fecha_nacimiento,
  vencimiento
) => {
  const cuilpdf = cuil.substring(0, 3);
  const idTramiteRenaper = "00" + id_tramite_principal;
  const pdf147 =
    idTramiteRenaper +
    "@" +
    apellido +
    "@" +
    nombre
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") +
    "@" +
    sexo +
    "@" +
    dni +
    "@" +
    ejemplar +
    "@" +
    fecha_nacimiento +
    "@" +
    vencimiento +
    "@" +
    cuilpdf;
  return pdf147;
};

export default getPDF;
