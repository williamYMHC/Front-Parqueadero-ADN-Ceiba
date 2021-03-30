import { by, element } from 'protractor';
import { AppPage } from '../../app.po';

export class ListarHistorialPage {
    
    private listaHistorial = element.all(by.css('tbody.historial tr'));
    private linkHistorial = element(by.id('historial-tab'));

    irAListadoHistorial(){
        const page = new AppPage();
        page.navigateTo("/parqueadero");
        this.clickLinkHistorial();
    }
    
    async clickLinkHistorial() {
        await this.linkHistorial.click();
    }

    getListaHistorial() {
        return this.listaHistorial;
    }

}
