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

export class PuntoVenta implements OnInit{

  categoriasProductos: Categoria[] = [];
  productosAgregados: ReporteProducto[] = [];

  constructor(private categoriaService: CategoriaService) {
  }

  ngOnInit(): void {
    this.categoriasProductos = this.categoriaService.getCategoriasProductos()
  }

  agregarProducto(prod: ReporteProducto): void{
    prod.cantidad = 1;
    this.productosAgregados.push(prod);

  }

  eliminarProducto(prod: ReporteProducto): void{
    const index = this.productosAgregados.indexOf(prod); 
  }
}
