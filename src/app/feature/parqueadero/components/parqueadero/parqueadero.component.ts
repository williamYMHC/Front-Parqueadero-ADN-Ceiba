import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EntradaService } from '../../shared/service/parqueadero.service';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent implements OnInit {

  tarifaDiaCarro: Observable<number> | undefined;
  tarifaDiaMoto: Observable<number>

  constructor(private entradaService: EntradaService) {
    this.tarifaDiaCarro = this.entradaService.consultarTarifaVehiculo('1');
    this.tarifaDiaMoto = this.entradaService.consultarTarifaVehiculo('2');

  }

  ngOnInit(): void {

  }

}
