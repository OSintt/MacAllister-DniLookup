const getIDARG = (
  dni,
  apellido,
  nombre,
  sexo,
  fecha_nacimiento,
  vencimiento
) => {
  // dar vuelta la fecha d nacimiento y sacar los primeros numeros del año
  let date1 = fecha_nacimiento;
  date1 = date1.split("/").reverse();
  date1[0] = date1[0].slice(-2);
  const date1finish = String(date1).replaceAll(",", "");
  // dar vuelta la fecha d vencimiento y sacar los primeros numeros del año
  let date2 = vencimiento;
  date2 = date2.split("/").reverse();
  date2[0] = date2[0].slice(-2);

  const date2finish = String(date2).replaceAll(",", "");
  const dni1 = dni[0];
  const dni2 = dni[1];
  const dni3 = dni[2];
  const dni4 = dni[3];
  const dni5 = dni[4];
  const dni6 = dni[5];
  const dni7 = dni[6];
  const dni8 = dni[7];

  const campo1 =
    dni1 * 7 +
    dni2 * 3 +
    dni3 * 1 +
    dni4 * 7 +
    dni5 * 3 +
    dni6 * 1 +
    dni7 * 7 +
    dni8 * 3;
  const finalcampo1 = String(campo1).slice(-1);
  const nac1 = date1finish[0];
  const nac2 = date1finish[1];
  const nac3 = date1finish[2];
  const nac4 = date1finish[3];
  const nac5 = date1finish[4];
  const nac6 = date1finish[5];
  const naccasi =
    nac1 * 7 + nac2 * 3 + nac3 * 1 + nac4 * 7 + nac5 * 3 + nac6 * 1;
  const nacfinal = String(naccasi).slice(-1);
  const ven1 = date2finish[0];
  const ven2 = date2finish[1];
  const ven3 = date2finish[2];
  const ven4 = date2finish[3];
  const ven5 = date2finish[4];
  const ven6 = date2finish[5];
  const vencasi =
    ven1 * 7 + ven2 * 3 + ven3 * 1 + ven4 * 7 + ven5 * 3 + ven6 * 1;
  const venfinal = String(vencasi).slice(-1);
  const casiultivalor =
    dni1 * 7 +
    dni2 * 3 +
    dni3 * 1 +
    dni4 * 7 +
    dni5 * 3 +
    dni6 * 1 +
    dni7 * 7 +
    dni8 * 3 +
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
