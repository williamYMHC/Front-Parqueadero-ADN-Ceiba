import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParqueaderoComponent } from './components/parqueadero/parqueadero.component';
import { CrearEntradaVehiculoComponent } from './components/crear-entrada/crear-entrada.component';
import { HistorialComponent } from './components/parqueadero/listar-historial/historial.component';


const routes: Routes = [
  {
    path: '',
    component: ParqueaderoComponent,
  },
  {
    path: 'crear',
    component: CrearEntradaVehiculoComponent,
  },
  {
    path: 'historial',
    component: HistorialComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParqueaderoRoutingModule { }
