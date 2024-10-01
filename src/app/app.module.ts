import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';  
import { MatFormFieldModule } from '@angular/material/form-field';  // Importa MatFormFieldModule
import { MatInputModule } from '@angular/material/input';
import { RegistroTareaComponent } from './components/registro-tarea/registro-tarea.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { CrudService } from './framework/services/crud.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    RegistroTareaComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    HttpClientModule,
    // RegistroTareaComponent,
    

  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
