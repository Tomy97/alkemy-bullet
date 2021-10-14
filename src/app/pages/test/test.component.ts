import { Sweetalert2Service } from './../../shared/components/sweetalert/service/sweetalert2.service';
import { Component, OnInit } from '@angular/core';
import { ITest } from 'src/app/shared/models/test.model';
//import { Operation } from '../../shared/models/operation.models';
//import { ELEMENT_DATA } from 'src/app/shared/models/operation.mock';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  //datos para llamar el componente de listado
  //datos!: Operation[]; 
  //titulo : string

  model: ITest = { name: 'Test name', description: 'test description' };
  constructor(  ) { }

  ngOnInit(): void { 

//datos para llamar el componente de listado
  //  this.datos = ELEMENT_DATA
    //this.titulo ="Listado de Operaciones"
  }

}


