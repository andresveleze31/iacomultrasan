const { OpenAI } = require("openai");
const pdfParse = require("pdf-parse");
const Embargo = require("../models/Embargo");
const openai = new OpenAI({
  apiKey: "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",
});

const uploadEmbargo = async (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).send("No file uploaded.");
  }

  const pdfFile = req.files.file;

  try {
    // Convert PDF to text using pdfreader
    const pdfData = await pdfParse(pdfFile.data);
    const text = pdfData.text;

    const promptText = `Devuelve la informacion en formato JSON. Del siguiente texto, entrege un archivo json con los datos con el siguiente orden, Radicado, Juzgado, Fecha_Embargo, Tipo_Identificacion_Demandado, Identificacion_Demandado, Nombre_Completo_Demandado, Tipo_Identificacion_Demandante, Identificacion_Demandante, Nombre_Completo_Demandante,  Medidas_Cautelares (arreglo por Entidad y Tipo_Embargo):  ${text}`;

    // Send text to OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: promptText }],
    });

    // Return the response to the frontend
    res.json({ response });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error processing the file.");
  }
};

const createEmbargo = async (req, res) => {
  try {
    const embargo = new Embargo(req.body);
    await embargo.save();

    res.status(201).json({
      success: true,
      message: "Embargo creado exitosamente",
      embargo,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const getEmbargos = async (req, res) => {
  try {
    const embargos = await Embargo.find();
    if (!embargos) {
      return res
        .status(400)
        .json({ success: false, message: "Embargos No Encontrados" });
    }

    return res.status(200).json({
        success: true, message: "Embargos Obtenidos",
        embargos
    })

  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  uploadEmbargo,
  createEmbargo,
  getEmbargos
};
