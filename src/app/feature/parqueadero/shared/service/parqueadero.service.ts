import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Entrada } from '../model/entrada';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {ExcepcionMensajes} from '@shared/excepciones-api/excepcion-mensajes';

@Injectable()
export class EntradaService {

  manejadorExepciones: ExcepcionMensajes;
  constructor(protected http: HttpService) {
    this.manejadorExepciones = new ExcepcionMensajes();
   }

  public consultar() {
    return this.http.doGet<Entrada[]>(`${environment.endpoint}/entradas`, this.http.optsName('consultar Entradas'));
  }

  public consultarHistorial() {
    return this.http.doGet<Entrada[]>(`${environment.endpoint}/salidas/consultar-historial`, this.http.optsName('consultar historial'));
  }

  public guardar(entrada: Entrada) {
    return this.http.doPost<Entrada, boolean>(`${environment.endpoint}/entradas`, entrada, this.http.optsName('crear Entradas'))
    .pipe(
        catchError(e => {
          console.log(e);
          this.manejadorExepciones.error('Error al crear', e.error.mensaje);
          return throwError(e);
        })
      );

  }

  public registrarSalida(entrada: Entrada) {
    return this.http.doPost<Entrada, boolean>(`${environment.endpoint}/salidas`, entrada, this.http.optsName('crear Entradas'))
    .pipe(
        catchError(e => {
          console.log(e);
          this.manejadorExepciones.error('Error al crear', e.error.mensaje);
          return throwError(e);
        })
      );

  }

  public consultarTarifaVehiculo(tipoVehiculo: string) {
    let params = new HttpParams();
    params = params.append('tipoVehiculo', tipoVehiculo);
    return this.http.doGetParameters<number>(`${environment.endpoint}/entradas/obtener-tarifa-vehiculo`, params, this.http.optsName('consultar Entradas'));

  }


}
