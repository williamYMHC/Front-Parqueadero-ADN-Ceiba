import { ListarHistorialPage } from '../../page/parqueadero/listar-historial.po';
import { ListarEntradasPage } from '../../page/parqueadero/listar-entradas.po';

describe('workspace-project listar entradas e historial de entradas', () => {
    let listarEntradasPage: ListarEntradasPage;
    let listarHistorialPage: ListarHistorialPage;

    beforeEach(() => {
        listarEntradasPage = new ListarEntradasPage();
        listarHistorialPage = new ListarHistorialPage();
        
    });

    it('Deberia listar entradas', () => {
        //arrange-act
        listarEntradasPage.irAlListadoEntradas();
        
        //assert
        expect(listarEntradasPage.getListaEntradas().count()).toBeGreaterThanOrEqual(1);

    });

    it('Deberia listar historial', () => {
        //arrange-act
        listarHistorialPage.irAListadoHistorial();
        
        //assert
        expect(listarHistorialPage.getListaHistorial().count()).toBeGreaterThanOrEqual(1);

    });


});
