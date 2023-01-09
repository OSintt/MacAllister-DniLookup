import { model, Schema } from 'mongoose';

const DniSchema = new Schema({
    dni: String,
    sexo: String,
    cuil: String,
    nombres: String,
    apellido: String,
    id_ciudadano: String,
    id_tramite_principal: String,
    id_tramite_tarjeta_reimpresa: Number,
    fecha_nacimiento: String,
    emision: String,
    vencimiento: String,
    fecha_fallecimiento: String,
    mensaje_fallecido: String,
    calle: String,
    numero: String,
    piso: String,
    departamento: String,
    monoblock: String,
    barrio: String,
    codigo_postal: String,
    ciudad: String,
    municipio: String,
    provincia: String,
    idarg: String,
    pdf147: String,
    tramitefix: String,
    pais: String,
    foto: String
});

export default model('Dni', DniSchema);