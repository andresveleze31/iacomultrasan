import DragDrop from "@/components/DragDrop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast, useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";

const UploadFile = () => {
  const [fecha, setFecha] = useState("");
  const [radicado, setRadicado] = useState("");
  const [demandante, setDemandante] = useState("");
  const [demandado, setDemandado] = useState("");
  const [embargo, setEmbargo] = useState();
  const [cargando, setCargando]= useState(false);
  const { toast } = useToast();

  const createEmbargo = async (e) => {
    e.preventDefault();

    try {
      console.log(embargo);
      const response = await axios.post(
        "http://localhost:5000/api/embargo/create-embargo",
        embargo,{
          'Content-Type': 'application/json'
        }
      ).then(response => {
        console.log('Datos enviados correctamente:', response.data);
      })
      .catch(error => {
        toast({
          title: "Embargo No Fue Creado",
          description: "Ha Ocurrido Un Error",
        });
        return console.error('Error al enviar los datos:', error);
      });

      toast({
        title: "Embargo Creado Correctamente",
        description: "El embargo se ha guardado en la base de datos",
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl mb-5 font-bold">Subir Archivo</h1>
      {cargando ? (
          <Loading />
      ) : 
      (<div className="grid grid-cols-2 gap-8">
        <div className="">
          <DragDrop
            setFecha={setFecha}
            setRadicado={setRadicado}
            setDemandante={setDemandante}
            setDemandado={setDemandado}
            setEmbargo={setEmbargo}
            setCargando={setCargando}
          />
        </div>
        <Card>
          <form onSubmit={createEmbargo} className="p-5" action="">
            <ScrollArea className="h-[350px] ">
              <div className="flex mt-2 flex-col gap-3">
                <label className="font-bold" htmlFor="name">
                  Fecha
                </label>
                <Input value={fecha} type="text" placeholder="Fecha" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold" htmlFor="name">
                  Radicado
                </label>
                <Input value={radicado} type="text" placeholder="Radicado" />
              </div>
              <div className="flex mt-2 flex-col gap-3">
                <label className="font-bold" htmlFor="name">
                  Demandado
                </label>
                <Input value={demandado} type="text" placeholder="Demandado" />
              </div>
              <div className="flex mt-2 flex-col gap-3">
                <label className="font-bold" htmlFor="name">
                  Demandante
                </label>
                <Input value={demandante} type="text" placeholder="Demandante" />
              </div>
            </ScrollArea>
            <Button className="w-full mt-7" type="submit">
              Cargar a Base de Datos
            </Button>
          </form>
        </Card>
      </div>)
      }
    </div>
  );
};

export default UploadFile;
