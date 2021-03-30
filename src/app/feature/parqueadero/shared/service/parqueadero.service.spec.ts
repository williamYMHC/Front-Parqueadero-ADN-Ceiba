import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EntradaService } from './parqueadero.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Entrada } from '../model/entrada';
import { HttpResponse } from '@angular/common/http';

describe('EntradaServiceTest', () => {
  let httpMock: HttpTestingController;
  let service: EntradaService;
  const apiEndpointEntradas = `${environment.endpoint}/entradas`;
  const apiEndpointSalidas = `${environment.endpoint}/salidas`;
  const apiEndpointHistorial = `${environment.endpoint}/salidas/consultar-historial`;
  const apiEndpointOBtenerTarifa = `${environment.endpoint}/entradas/obtener-tarifa-vehiculo`;

  ///entradas/obtener-tarifa-vehiculo
  //const apiEndpointProductos = `${environment.endpoint}/productos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EntradaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(EntradaService);
  });

  it('should be created', () => {
    const entradaService: EntradaService = TestBed.inject(EntradaService);
    expect(entradaService).toBeTruthy();
  });

  it('deberia listar entradas', () => {
    const dummyEntradas = [
      new Entrada(1, 1, 'TEST', '111', 'PLC-TES', '2021-03-29 11:03:27', false, 1000.0), new Entrada(1, 1, 'TEST', '222', 'PLC-TE2', '2021-03-29 11:05:27', false, 1000.0)
    ];

    service.consultar().subscribe(entradas => {
      expect(entradas.length).toBe(2);
      expect(entradas).toEqual(dummyEntradas);
    });
    const req = httpMock.expectOne(apiEndpointEntradas);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEntradas);
  });

  it('deberia consultar historial', () => {
    const dummyEntradas = [
      new Entrada(1, 1, 'TEST', '111', 'PLC-TES', '2021-03-29 11:03:27', false, 1000.0,'2021-03-29 11:30:27', 3000.0 ), 
      new Entrada(2, 1, 'TEST', '222', 'PLC-TE2', '2021-03-29 11:05:27', false, 1000.0, '2021-03-29 11:30:27', 3000.0)
    ];

    service.consultarHistorial().subscribe(entradasHistorial => {
      expect(entradasHistorial.length).toBe(2);
      expect(entradasHistorial).toEqual(dummyEntradas);
    });
    const req = httpMock.expectOne(apiEndpointHistorial);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEntradas);
  });

  it('deberia crear una entrada', () => {
    const dummyEntrada = new Entrada(1, 1, 'TEST', '111', 'PLC-TES', '2021-03-29 11:03:27', false, 1000.0)
    service.guardar(dummyEntrada).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointEntradas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia registrar salida', () => {
    const dummyEntrada = new Entrada(1, 1, 'TEST', '111', 'PLC-TES', '2021-03-29 11:03:27', false, 1000.0)
    service.registrarSalida(dummyEntrada).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointSalidas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia consultar tarifa vehiculo', () => {
    
    const tipoVehiculo = '1';
    const tarifaValue = 1000.0;
    service.consultarTarifaVehiculo(tipoVehiculo).subscribe(tarifa => {
      expect(tarifa).toEqual(tarifaValue);
    });
    const req = httpMock.expectOne(apiEndpointOBtenerTarifa+'?tipoVehiculo=1');
    expect(req.request.method).toBe('GET');
    req.flush(tarifaValue);
  });
  

  

});
