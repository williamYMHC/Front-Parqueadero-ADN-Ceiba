import { by, element } from 'protractor';
import { AppPage } from '../../app.po';

export class CrearSalidaPage {
    
    private btnCrearSalida = element.all(by.id('btnCrearSalida')).first();
    private btnConfirmarSalida = element(by.className('swal2-confirm'));
    private mensajeRegistroSalida = element(by.id('swal2-title'));

    crearSalidaPrimerVehiculo(){
        const page = new AppPage();
        page.navigateTo("/parqueadero");
        this.clickBotonCrearSalida();
        this.confirmarSalida();
    }

    async clickBotonCrearSalida() {
        await this.btnCrearSalida.click();
    }

    async confirmarSalida() {
        await this.btnConfirmarSalida.click();
    }
    
    getMensajeRegistrosalida() {
        return this.mensajeRegistroSalida;
    }

}
