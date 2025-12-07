import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from './app';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { Categorias } from './categorias/categorias';
import { AperturasCaja } from './apertura-caja/apertura-caja';
import { CierresCaja } from './cierre-caja/cierre-caja';
import { Compras } from './compras/compras';
import { Home } from './home/home';
import { Inventarios } from './inventario/inventario';
import { MetodosPago } from './metodos-pago/metodos-pago';
import { MovimientosInventario } from './movimiento-inventario/movimiento-inventario';
import { OtrosMovimientos } from './otros-movimientos/otros-movimientos';
import { Productos } from './productos/productos';
import { Proveedores } from './proveedores/proveedores';
import { PuntoVenta } from './punto-venta/punto-venta';
import { UnidadesMedida } from './unidades-medida/unidades-medida';
import { Usuarios } from './usuarios/usuarios';
import { Ventas } from './ventas/ventas';
import { CategoriaModalComponent } from './categorias/categoria-modal/categoria-modal.component';
import { MessageComponent } from './message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MetodoPagoModalComponent } from './metodos-pago/metodo-pago-modal/metodo-pago-modal.component';
import { ReporteProductoModalComponent } from './productos/reporte-producto-modal/reporte-producto-modal.component';
import { ProveedorModalComponent } from './proveedores/proveedor-modal/proveedor-modal.component';
import { AperturaCajaModalComponent } from './apertura-caja/apertura-caja-modal.component/apertura-caja-modal.component';
import { CierreCajaModalComponent } from './cierre-caja/cierre-caja-modal.component/cierre-caja-modal.component';
import { CompraModalComponent } from './compras/compra-modal.component/compra-modal.component';
import { InventarioModalComponent } from './inventario/inventario-modal.component/inventario-modal.component';
import { MovimientoInventarioModalComponent } from './movimiento-inventario/movimiento-inventario-modal.component/movimiento-inventario-modal.component';
import { OtroMovimientoModalComponent } from './otros-movimientos/otro-movimiento-modal.component/otro-movimiento-modal.component';
import { UnidadMedidaModalComponent } from './unidades-medida/unidad-medida-modal.component/unidad-medida-modal.component';
import { UsuarioModalComponent } from './usuarios/usuario-modal.component/usuario-modal.component';
import { VentaModalComponent } from './ventas/venta-modal.component/venta-modal.component';



@NgModule({
  declarations: [
    App,
    Categorias,
    CategoriaModalComponent,
    MessageComponent,
    MetodosPago,
    MetodoPagoModalComponent,
    Productos,
    ReporteProductoModalComponent,
    PuntoVenta,
    //Home,
    AperturasCaja,
    CierresCaja,
    Compras,
    Inventarios,
    MovimientosInventario,
    OtrosMovimientos,
    Proveedores,
    UnidadesMedida,
    Usuarios,
    Ventas,
    
    AperturaCajaModalComponent,
    CierreCajaModalComponent,
    CompraModalComponent,
    InventarioModalComponent,
    MovimientoInventarioModalComponent,
    OtroMovimientoModalComponent,
    ProveedorModalComponent,
    UnidadMedidaModalComponent,
    UsuarioModalComponent,
    VentaModalComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    TranslocoRootModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    App
  ]
})
export class AppModule { }
