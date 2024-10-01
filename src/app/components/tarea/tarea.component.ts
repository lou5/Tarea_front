import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/framework/services/crud.service';
import { Constants } from 'src/app/framework/util/utils';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  public searchForm!: FormGroup;
  dataSource = new MatTableDataSource<any>([]);
  selectedElement: any;
  showRegistroTarea = false;
  public LstPQRs: any[] = [];


   // define las columnas
   displayedColumns1: string[] = [
    'acciones',
    'nombreTarea',
    'fechaTarea',
    'pqr_fecha_limite',
    
  ];

  displayedColumns: string[] = [
    'acciones',
    'nombreTarea',
    'fechaTarea',
    'pqr_fecha_limite',
    
  ];


  constructor (
    private form: FormBuilder,
    public router: Router,
    public crudService: CrudService,
  ){}

  ngOnInit(): void {
   this.searchForm = this.form.group({
    nombreTarea:[''],
    // estadoTarea:[''],
    fechaTarea:['']
   })
  }

 async lookFor(){
   const formValues = this.searchForm.value
    console.log('datos', formValues);

    const data = {
       tareaForm: 
        this.searchForm.value 
    }
    const response = await this.crudService.post(Constants.URL_BUSCADOR + '/buscar', { data })
    console.log('datos',response)
    if (response) {
      // this.LstPQRs = response;
      this.LstPQRs = response
      this.dataSource.data = this.LstPQRs;

    }
  }

  clear():void{
    this.searchForm.reset();
  }

  async openModal(element: any, tableId: number): Promise<void> {

  }

  NuevoRegistro(){
    console.log('....')
    this.showRegistroTarea = true;
    this.router.navigate(['registroTarea']);
  }

}
