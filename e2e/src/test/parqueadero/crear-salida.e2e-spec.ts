import { CrearSalidaPage } from '../../page/parqueadero/crear-salida.po';

describe('workspace-project CrearSalida', () => {
    let salidaPage: CrearSalidaPage;

    beforeEach(() => {
        salidaPage = new CrearSalidaPage();
    });

    it('Deberia crear salida al primer vehiculo', () => {
        //arrange-act
        salidaPage.crearSalidaPrimerVehiculo();
        
        //assert
        expect(salidaPage.getMensajeRegistrosalida().getText()).toEqual("Salida Realizada");

    });


});
