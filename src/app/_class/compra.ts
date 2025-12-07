export interface Compra {
    idCompra: number;
    idProveedor: number;
    fechaHora: Date;
    total: number;
    idUsuario: number;
    estatus: string;
    
    idProducto: number;
    cantidad: number;
    costoUnitario: number;
    subtotal: number;

}
