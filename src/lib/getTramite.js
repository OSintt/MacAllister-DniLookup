const getTramite = (
  id_tramite_principal,
) => {
  const tramitefix = "00" + id_tramite_principal;
  
  return tramitefix;
};

export default getTramite;
