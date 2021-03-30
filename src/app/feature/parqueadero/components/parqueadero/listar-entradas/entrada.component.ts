import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../../shared/model/entrada';
import { Observable } from 'rxjs';
import { EntradaService } from '../../../shared/service/parqueadero.service';
import {ExcepcionMensajes} from '@shared/excepciones-api/excepcion-mensajes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  public listaEntradas: Observable<Entrada[]> | undefined;
  entrada: Entrada;
  manejadorExepciones: ExcepcionMensajes;

  constructor(private entradaService: EntradaService, private router:Router) {
    this.manejadorExepciones = new ExcepcionMensajes();
  }

  ngOnInit(): void {
    this.listaEntradas = this.entradaService.consultar();
  }
  
  reloadComponent() {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['./parqueadero']);
  }

  registrarSalida(id: number, placaVehiculo: string) {

    this.manejadorExepciones.confirmDialog('Registrar Salida','Realizara salida al registro # '+id+' con placa # '+placaVehiculo, true, 'confirmar salida')
    .then((result) => {
      if (result.isConfirmed) {
        this.entrada = new Entrada(id, null, null,null,null,null,null,null);
        this.entradaService.registrarSalida(this.entrada).subscribe(res => {
          if(res){
            this.reloadComponent();
            //this.listaEntradas = this.entradaService.consultar();
           //this.entradaService.consultarHistorial();
            this.manejadorExepciones.success('Salida Realizada', 'Salida del vehiculo registrada correctamente');
          }
          else {
            console.log(res); 
          }
    
        });
      }
    })
    
  }

}
