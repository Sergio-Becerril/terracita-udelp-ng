export interface MovimientoInventario {
    idMovimiento: number;
    idProducto: number;
    idTipoMovimiento: number;
    cantidad: number;
    existenciaAnterior: number;
    existenciaNueva: number;
    referencia: string;
    fechaHora: Date; 
    idUsuario: number;
    motivo: string;
}
