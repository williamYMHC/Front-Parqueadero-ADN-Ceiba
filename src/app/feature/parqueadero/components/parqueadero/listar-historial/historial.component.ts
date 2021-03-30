import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../../shared/model/entrada';
import { Observable } from 'rxjs';
import { EntradaService } from '../../../shared/service/parqueadero.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  public listaHistorial: Observable<Entrada[]> | undefined;
  constructor(private entradaService: EntradaService) {

  }

  ngOnInit(): void {
    this.listaHistorial = this.entradaService.consultarHistorial();

  }

}
