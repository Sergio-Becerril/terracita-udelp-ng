import { Component, OnInit } from '@angular/core';
import { Categoria } from '../_class/categoria';
import { CategoriaService } from '../_service/categoria.service';
import { ReporteProducto } from '../_class/reporte-producto';


@Component({
  selector: 'app-punto-venta',
  standalone: false,
  templateUrl: './punto-venta.html',
  styleUrl: './punto-venta.css'
})
export class PuntoVenta implements OnInit {

  categoriasProductos: Categoria[] = [];
  productosAgregados: ReporteProducto[] = [];

  // Total y formas de pago
  total: number = 0;
  formasPago: string[] = ['Efectivo', 'Tarjeta', 'Transferencia'];
  formaPagoSeleccionada: string = this.formasPago[0];

  // Inyecta CategoriaService y VentaService (si existe)
  constructor(
    private categoriaService: CategoriaService,
  ) { }

  ngOnInit(): void {
    // obtiene las categorias y productos (usa tu service existente)
    this.categoriasProductos = this.categoriaService.getCategoriasProductos();

    // inicializa total
    this.calculateTotal();
  }

  /* ------------------------------
     Funciones de carrito / control
     ------------------------------ */

  // Agregar producto: si ya existe en el carrito incrementa cantidad, si no lo añade
  agregarProducto(prod: ReporteProducto): void {
    // busco por id (si tu modelo tiene 'id' usarlo; si no, usar nombre como fallback)
    const idKey = (prod as any).id !== undefined ? 'id' : 'nombre';
    const prodId = (prod as any)[idKey];

    const existente = this.productosAgregados.find(p => ((p as any)[idKey]) === prodId);

    if (existente) {
      existente.cantidad = (existente.cantidad || 0) + 1;
    } else {
      // clonar objeto para evitar mutar la referencia del listado de productos
      const copia: ReporteProducto = { ...prod, cantidad: 1 };
      this.productosAgregados.push(copia);
    }
    this.calculateTotal();
  }

  // Aumentar cantidad de un item del carrito
  increase(prod: ReporteProducto): void {
    prod.cantidad = (prod.cantidad || 0) + 1;
    this.calculateTotal();
  }

  // Disminuir cantidad: si queda 0 se elimina
  decrease(prod: ReporteProducto): void {
    prod.cantidad = (prod.cantidad || 1) - 1;
    if ((prod.cantidad || 0) <= 0) {
      this.remove(prod);
    } else {
      this.calculateTotal();
    }
  }

  // Eliminar item del carrito (borrar completamente)
  remove(prod: ReporteProducto): void {
    const index = this.productosAgregados.indexOf(prod);
    if (index > -1) {
      this.productosAgregados.splice(index, 1);
    }
    this.calculateTotal();
  }

  // Alias para botón que en tu html antiguo llamaba eliminarProducto
  eliminarProducto(prod: ReporteProducto): void {
    this.remove(prod);
  }

  // Recalcula el total (suma precio * cantidad)
  calculateTotal(): void {
    this.total = this.productosAgregados.reduce((acc, p) => {
      const cantidad = p.cantidad || 1;
      const precio = (p.precio !== undefined && !isNaN(p.precio as any)) ? (p.precio as any) : 0;
      return acc + (precio * cantidad);
    }, 0);
  }

  /* ------------------------------
     Pago / Generación de Venta(s)
     ------------------------------ */

  // Construye un objeto 'venta' y lo envía al servicio de ventas (si existe).
  // Puedes ajustar la estructura de la venta según tu backend.
  pagar(): void {
    if (this.productosAgregados.length === 0) {
      alert('El carrito está vacío.');
      return;
    }

    // Estructura ejemplo: venta maestro con detalles
    const ventaMaestra: any = {
      fecha: new Date(),
      total: this.total,
      formaPago: this.formaPagoSeleccionada,
      detalles: this.productosAgregados.map(p => ({
        idProducto: (p as any).id ?? null,
        nombre: p.nombre,
        cantidad: p.cantidad || 1,
        precioUnitario: p.precio,
        subtotal: (p.precio || 0) * (p.cantidad || 1)
      }))
    };

}


  formatCurrency(value: number): string {
    return '$ ' + (value || 0).toFixed(2);
  }

}
