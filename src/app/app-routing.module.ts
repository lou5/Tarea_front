import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroTareaComponent } from './components/registro-tarea/registro-tarea.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: 'Tarea', component: TareaComponent},
  { path: 'registroTarea', component: RegistroTareaComponent },
  // { path: '', redirectTo: 'Tarea', pathMatch: 'full' }, 
  // { path: '**', redirectTo: '/Tarea' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
