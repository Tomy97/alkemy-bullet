import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';




// Ngx-Bootstrap Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListOperationsComponent } from './components/list-operations/list-operations.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    ListOperationsComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule

  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ButtonComponent,
    NavbarComponent,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule,
    LoaderComponent,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    ListOperationsComponent,
    MatPaginatorModule,
    MatSortModule,
    FormComponent,
    MatIconModule
  ],
})
export class SharedModule { }
