import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from './app';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { Categorias } from './categorias/categorias';
import { AperturaCaja } from './apertura-caja/apertura-caja';
import { CierreCaja } from './cierre-caja/cierre-caja';
import { Compras } from './compras/compras';
import { Home } from './home/home';
import { Inventario } from './inventario/inventario';
import { MetodosPago } from './metodos-pago/metodos-pago';
import { MovimientoInventario } from './movimiento-inventario/movimiento-inventario';
import { OtrosMovimientos } from './otros-movimientos/otros-movimientos';
import { Productos } from './productos/productos';
import { Proveedores } from './proveedores/proveedores';
import { PuntoVenta } from './punto-venta/punto-venta';
import { UnidadesMedida } from './unidades-medida/unidades-medida';
import { Usuarios } from './usuarios/usuarios';
import { Ventas } from './ventas/ventas';
import { CategoriaModalComponent } from './categorias/categoria-modal/categoria-modal.component';



@NgModule({
  declarations: [
    App,
    Categorias,
    CategoriaModalComponent
    /*
    AperturaCaja,
    CierreCaja,
    Compras,
    Home,
    Inventario,
    MetodosPago,
    MovimientoInventario,
    OtrosMovimientos,
    Productos,
    Proveedores,
    PuntoVenta,
    UnidadesMedida,
    Usuarios,
    Ventas*/
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    TranslocoRootModule,
    
  ],
  bootstrap: [
    App
  ]
})
export class AppModule { }
