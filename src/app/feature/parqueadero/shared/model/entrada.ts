
export class Entrada {
    id: number ;
    tipoVehiculo: number;
    marcaVehiculo: string | undefined;
    modeloVehiculo: string | undefined;
    placaVehiculo: string | undefined;
    fecha: string | undefined;
    registraSalida: boolean | undefined;
    tarifaDia: number | undefined;
    fechaSalida: string | undefined;
    valorTarifa: number | undefined;
    
    constructor(id: number, tipoVehiculo: number, marcaVehiculo: string, 
                modeloVehiculo:string, placaVehiculo: string, fecha: string, registraSalida: boolean, tarifaDia: number, fechaSalida?: string, valorTarifa?:number) {
        this.id = id;
        this.tipoVehiculo = tipoVehiculo;
        this.marcaVehiculo = marcaVehiculo;
        this.modeloVehiculo = modeloVehiculo;
        this.placaVehiculo = placaVehiculo;
        this.fecha = fecha;
        this.registraSalida = registraSalida;
        this.tarifaDia = tarifaDia;
        this.fechaSalida = fechaSalida;
        this.valorTarifa = valorTarifa;

    }

    
}
