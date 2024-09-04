const mongoose = require('mongoose');

const medidaCautelarSchema = new mongoose.Schema({
  Entidad: { type: String, required: true },
  Tipo_Embargo: { type: String, required: true },
});

const embargoSchema = new mongoose.Schema({
  Radicado: { type: String, required: true },
  Juzgado: { type: String, required: true },
  Fecha_Embargo: { type: String, required: true },
  Tipo_Identificacion_Demandado: { type: String, required: true },
  Identificacion_Demandado: { type: String, required: true },
  Nombre_Completo_Demandado: { type: String, required: true },
  Tipo_Identificacion_Demandante: { type: String, required: true },
  Identificacion_Demandante: { type: String, required: true },
  Nombre_Completo_Demandante: { type: String, required: true },
  Medidas_Cautelares: [medidaCautelarSchema]
});

const Embargo = mongoose.model('Embargo', embargoSchema);

module.exports = Embargo;
