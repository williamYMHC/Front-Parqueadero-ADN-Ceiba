import { by, element } from 'protractor';
import { AppPage } from '../../app.po';

export class ListarEntradasPage {
    
    private listaEntradas = element.all(by.css('tbody.entradas tr'));

    irAlListadoEntradas(){
        const page = new AppPage();
        page.navigateTo("/parqueadero");
    }
  
    getListaEntradas() {
        return this.listaEntradas;
    }

}
