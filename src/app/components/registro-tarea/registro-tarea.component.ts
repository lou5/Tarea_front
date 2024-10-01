import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/framework/services/crud.service';
import { Constants } from 'src/app/framework/util/utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-tarea',
  templateUrl: './registro-tarea.component.html',
  styleUrls: ['./registro-tarea.component.css'],
})
export class RegistroTareaComponent  implements OnInit{

  public TAREAForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    public crudService: CrudService,

  ){}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void{
    this.TAREAForm = this.formBuilder.group({
      nombreTarea:[''],
      fechaLimite:[''],
      nombrePersona:[''],
      edad:[''],
      Habilidades:['']
    })
  }

async guardar():Promise<void>{
  const tarea = this.TAREAForm.getRawValue();  

  if (tarea.edad < 18) {
    Swal.fire({
      title: 'No se puede guardar la tarea',
      text: 'La persona debe ser mayor de 18 años',
      icon: 'error',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Entendido'
    });
    return; 
  }
  
  const tareaData ={
    TAREA: tarea.nombreTarea,
    TARE_FECHALIMITE:tarea.fechaLimite
  }
  
  const personaData ={
    PERS_NOMBRECOMPLETO: tarea.nombrePersona,
    PERS_EDAD: tarea.edad,
  }
  console.log('datos', tareaData,personaData );
  try {
    const data = await this.crudService.post(Constants.URL_GUARDARTAREA + '/guardarTarea', { tareaData, personaData })
    if (data) {
      if (data) {
        Swal.fire({
          title: 'Tarea guardada con exito !',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'NOTIFICAR',
          allowOutsideClick: false
        }).then((result) => {
          if (result.isConfirmed) {
          }
        })
      }
    };
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    // Manejo del error si es necesario
  }
}

}
