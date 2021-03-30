import { Utils } from '../../utils/utils';
import {CrearEntradaPage} from '../../page/parqueadero/crear-entrada.po';

describe('workspace-project CrearEntrada', () => {
    let entradaPage: CrearEntradaPage;

    beforeEach(() => {
        entradaPage = new CrearEntradaPage();
    });

    it('Deberia crear entrada', () => {
        
        //arrange
        const TIPO_VEHICULO = 'Carro';
        const MARCA_VEHICULO = 'RENAULT-TEST';
        const MODELO_VEHICULO = 'STEEPWAY-TEST';
        const PLACA_VEHICULO = Utils.getRandomString(7);
        
        //act
        entradaPage.crearEntrada(TIPO_VEHICULO,MARCA_VEHICULO, MODELO_VEHICULO, PLACA_VEHICULO);
        
        //assert
        expect(entradaPage.getMensajeRegistro().getText()).toEqual("Registro Realizado");

    });


});
