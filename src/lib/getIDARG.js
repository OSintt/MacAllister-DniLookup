const getIDARG = (
  dni,
  apellido,
  nombre,
  sexo,
  fecha_nacimiento,
  vencimiento
) => {
  // dar vuelta la fecha d nacimiento y sacar los primeros numeros del año
  let date1 = fecha_nacimiento.split("/").reverse();
  date1[0] = date1[0].slice(-2);
  const date1finish = String(date1).replaceAll(",", "");
  // dar vuelta la fecha d vencimiento y sacar los primeros numeros del año
  let date2 = vencimiento.split("/").reverse();
  date2[0] = date2[0].slice(-2);

  const date2finish = String(date2).replaceAll(",", "");

  const campo1 =
    dni[0] * 7 +
    dni[1] * 3 +
    dni[2] * 1 +
    dni[3] * 7 +
    dni[4] * 3 +
    dni[5] * 1 +
    dni[6] * 7 +
    dni[7] * 3;
  const finalcampo1 = String(campo1).slice(-1);
  const naccasi =
    date1finish[0] * 7 +
    date1finish[1] * 3 +
    date1finish[2] * 1 +
    date1finish[3] * 7 +
    date1finish[4] * 3 +
    date1finish[5] * 1;

  const nacfinal = String(naccasi).slice(-1);
  const vencasi =
    date2finish[0] * 7 +
    date2finish[1] * 3 +
    date2finish[2] * 1 +
    date2finish[3] * 7 +
    date2finish[4] * 3 +
    date2finish[5] * 1;
  const venfinal = String(vencasi).slice(-1);
  const casiultivalor =
    dni[0] * 7 +
    dni[1] * 3 +
    dni[2] * 1 +
    dni[3] * 7 +
    dni[4] * 3 +
    dni[5] * 1 +
    dni[6] * 7 +
    dni[7] * 3 +
    finalcampo1 * 1 +
    nac1 * 7 +
    nac2 * 3 +
    nac3 * 1 +
    nac4 * 7 +
    nac5 * 3 +
    nac6 * 1 +
    nacfinal * 7 +
    ven1 * 3 +
    ven2 * 1 +
    ven3 * 7 +
    ven4 * 3 +
    ven5 * 1 +
    ven6 * 7 +
    venfinal * 3;
  const valorfinal = String(casiultivalor).slice(-1);
  const barra = "<";
  const idarg1 = "IDARG" + dni + "<" + finalcampo1 + "<<<<<<<<<<<<<<<";
  const idarg2 =
    date1finish +
    nacfinal +
    sexo +
    date2finish +
    venfinal +
    "ARG" +
    "<<<<<<<<<<<" +
    valorfinal;
  let idarg3 =
    apellido.split(" ").join("<") +
    "<<" +
    nombre
      .split(" ")
      .join("<")
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") +
    barra.repeat(30);
  idarg3 = idarg3.substring(0, 30);

  return `${idarg1}\n${idarg2}\n${idarg3}`;
};

export default getIDARG;
