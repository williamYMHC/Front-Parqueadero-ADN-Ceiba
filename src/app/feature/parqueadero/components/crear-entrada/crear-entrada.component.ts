import { Component, OnInit } from '@angular/core';
import { EntradaService } from '../../shared/service/parqueadero.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ExcepcionMensajes} from '@shared/excepciones-api/excepcion-mensajes';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

const LONGITUD_MINIMA_PERMITIDA_PLACA = 7;
const LONGITUD_MAXIMA_PERMITIDA_PLACA = 7;

@Component({
  selector: 'app-crear-entrada',
  templateUrl: './crear-entrada.component.html',
  styleUrls: ['./crear-entrada.component.css']
})
export class CrearEntradaVehiculoComponent implements OnInit {

  entradaForm: FormGroup;
  titulo: string;
  manejadorExepciones: ExcepcionMensajes;

  constructor(protected entradaService: EntradaService, private router: Router) { 
    this.titulo = "Registar Entrada de Vehiculo";
    this.manejadorExepciones = new ExcepcionMensajes();
  }

  ngOnInit() {
    this.construirFormularioEntrada();
  }

  crear() {
    this.entradaService.guardar(this.entradaForm.value).subscribe(res => {
      if(res){
        this.router.navigate(['/parqueadero']);
        this.manejadorExepciones.success('Registro Realizado', 'Entrada del vehiculo registrada');
      }
      else {
        console.log(res); 
      }

    });
  }

  private construirFormularioEntrada() {
    this.entradaForm = new FormGroup({
      tipoVehiculo:new FormControl('', [Validators.required]),

      marcaVehiculo:new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),

      modeloVehiculo:new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
          Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),

      placaVehiculo:new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_PLACA),
            Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_PLACA)]),

    });
  }

}
