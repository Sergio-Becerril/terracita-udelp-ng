import { Categoria } from "./categoria";

export interface ReporteProducto {
    id: number;
    nombre: string;
    precio: number;
    existencia: number;
    categoria: Categoria | null;
    estado: boolean;
    cantidad: number;
}

