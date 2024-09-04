import { Calendar, DollarSign, File, LayoutDashboard, List, MonitorCog, PlusIcon } from "lucide-react";

export const SidebarLinks = [
    {
        id: 1,
        name: "Dashboard",
        link: "/",
        icon: <LayoutDashboard className="w-5 h-5" />
    },
    {
        id: 2,
        name: "Subir Archivo",
        link: "/upload-file",
        icon: <File className="w-5 h-5" />
    },
    {
        id: 3,
        name: "Listado Embargos",
        link: "/listado-embargos",
        icon: <List className="w-5 h-5" />
    },
    {
        id: 4,
        name: "Configuracion Cuentas",
        link: "/nuevo-evento",
        icon: <PlusIcon className="w-5 h-5" />
    },

]