import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresosComponent } from './ingresos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IngresosRoutingModule } from './ingresos-routing.module';



@NgModule({
  declarations: [
    IngresosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IngresosRoutingModule
  ]
})
export class IngresosModule { }
