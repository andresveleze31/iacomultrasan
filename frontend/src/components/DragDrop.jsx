import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const fileTypes = ["PDF"];

function DragDrop({ setFecha, setRadicado, setDemandante, setDemandado, setEmbargo }) {
  const { toast } = useToast();
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const handleChange = (file) => {
    setFile(file);
    // Crear una URL temporal para mostrar el PDF
    const url = URL.createObjectURL(file);
    setFileUrl(url);
  };

  const getData = async (e) => {
    e.preventDefault();
    if (!file) {
      toast({
        title: "Archivo No Cargado",
        description: "El archivo no ha sido cargado correctamente",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/embargo/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Manejar la respuesta exitosa
      const embargoText = response.data.response.choices[0].message.content;
      const embargoCleanText = embargoText
        .replace(/\n\t/g, "") // Elimina saltos de línea y tabulaciones
        .replace(/\\"/g, '"');
      const embargo = JSON.parse(embargoCleanText);

      console.log(embargo);

      setRadicado(embargo.Radicado);
      setDemandado(embargo.Nombre_Completo_Demandado);
      setDemandante(embargo.Nombre_Completo_Demandante);
      setFecha(embargo.Fecha_Embargo)
      setEmbargo(embargo);

    } catch (error) {
      // Manejar los errores
      console.error("Error al enviar los datos:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al subir el archivo.",
      });
    }
  };

  return (
    <div className="flex flex-col">
      <FileUploader
        className="border-primary"
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <Card className="mt-5 h-[400px] p-5 ">
        {file && file.type === "application/pdf" && (
          <embed
            src={fileUrl}
            type="application/pdf"
            width="100%"
            height="310px"
          />
        )}
        <form onSubmit={getData} action="">
          <Button type="submit" className="w-full">
            Subir Archivo
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default DragDrop;
