import Swal from 'sweetalert2';


export class ExcepcionMensajes  {

  public error(mensaje:string,mensajeError: string) {
    Swal.fire(mensaje, mensajeError, 'error');
  }

  public success(mensaje:string,mensajeError: string) {
    Swal.fire(mensaje, mensajeError, 'success');
  }

  public confirmDialog(titulo: string, texto: string, mostrarBotonCancelar: boolean,
     textoBotonConfirmar: string){
     
      return Swal.fire({
        title: titulo,
        text: texto,
        icon: 'warning',
        showCancelButton: mostrarBotonCancelar,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: textoBotonConfirmar
      });
     
  }
 
  constructor() {}
}

