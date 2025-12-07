export interface Venta {
    idVenta: number;
    fechaHora: Date;
    total: number;
    idFormaPago: number;
    idUsuario: number;
    estatus: string;
    
    idProducto: number;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
}
