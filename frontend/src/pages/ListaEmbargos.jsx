"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "@/components/embargos/DataTable";
import { columns } from "@/components/embargos/Columns";

const ListaEmbargos = () => {
  // Corrección aquí: usar useState en lugar de useEffect para el estado
  const [embargos, setEmbargos] = useState([]);

  const getEmbargos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/embargo/get-embargos"
      );
      console.log("Datos obtenidos correctamente:", response.data);
      setEmbargos(response.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    getEmbargos();
  }, []);

  return (
    <div>
      <h1 className="text-3xl mb-5 font-bold">Lista de Embargos</h1>
      {embargos.embargos && (
                <DataTable columns={columns} data={embargos.embargos} />

      )}
    </div>
  );
};

export default ListaEmbargos;
