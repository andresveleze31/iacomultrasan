import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"

export const columns = [
    {
        accessorKey: "Fecha_Embargo",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Fecha
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
      },
    {
      accessorKey: "Radicado",
      header: "Radicado",
    },
    {
      accessorKey: "Juzgado",
      header: "Juzgado",
    },
    
    {
        accessorKey: "Nombre_Completo_Demandado",
        header: "Nombre Demandante"
    },
    {
        accessorKey: "Nombre_Completo_Demandante",
        header: "Nombre Demandante"
    }
  ]