import { ReporteProducto } from "./reporte-producto";

export class Categoria {
    id!: number;
    nombre!: string;
    descripcion!:string;
    productos!: ReporteProducto[] | null;
}
