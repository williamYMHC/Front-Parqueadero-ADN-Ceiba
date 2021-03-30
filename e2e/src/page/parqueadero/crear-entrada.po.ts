import { by, element } from 'protractor';
import { AppPage } from '../../app.po';

export class CrearEntradaPage {
    
    private btnCrearEntrada = element(by.id('btnCrearEntrada'));

    private inputMarcaVehiculo = element(by.id('marcaVehiculo'));
    private inputModeloVehiculo = element(by.id('modeloVehiculo'));
    private inputPlacaVehiculo = element(by.id('placaVehiculo'));
    private mensajeRegistro = element(by.id('swal2-title'));

    crearEntrada(tipoVehiculo: string, marcaVehiculo: string, modeloVehiculo: string, placaVehiculo:string ){
        const page = new AppPage();
        
        page.navigateTo("/parqueadero/crear");
        this.ingresarTipoVehiculo(tipoVehiculo);
        this.ingresarMarcaVehiculo(marcaVehiculo);
        this.ingresarModeloVehiculo(modeloVehiculo);
        this.ingresarPlacaVehiculo(placaVehiculo);
        this.clickBotonCrearEntrada();
        
    }

    async clickBotonCrearEntrada() {
        await this.btnCrearEntrada.click();
    }

    async ingresarTipoVehiculo(tipoVehiculo: string) {
        await element(by.cssContainingText('option', tipoVehiculo)).click();
    }

    async ingresarMarcaVehiculo(marcaVehiculo: string) {
        await this.inputMarcaVehiculo.sendKeys(marcaVehiculo);
    }

    async ingresarModeloVehiculo(modeloVehiculo: string) {
        await this.inputModeloVehiculo.sendKeys(modeloVehiculo);
    }

    async ingresarPlacaVehiculo(placaVehiculo: string) {
        await this.inputPlacaVehiculo.sendKeys(placaVehiculo);
    }

    getMensajeRegistro() {
        return this.mensajeRegistro;
    }

}
