import { NgModule } from '@angular/core';

import { ParqueaderoRoutingModule } from './parqueadero-routing.module';
import { ParqueaderoComponent } from './components/parqueadero/parqueadero.component';
import { EntradaComponent } from './components/parqueadero/listar-entradas/entrada.component';
import { HistorialComponent } from './components/parqueadero/listar-historial/historial.component';

import { CrearEntradaVehiculoComponent } from './components/crear-entrada/crear-entrada.component';

import { SharedModule } from '@shared/shared.module';
import { EntradaService } from './shared/service/parqueadero.service';


@NgModule({
  declarations: [
    HistorialComponent,
    EntradaComponent,
    CrearEntradaVehiculoComponent,
    ParqueaderoComponent
  ],
  imports: [
    ParqueaderoRoutingModule,
    SharedModule
  ],
  providers: [EntradaService]
})
export class ParqueaderoModule { }
