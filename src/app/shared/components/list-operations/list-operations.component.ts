
import {AfterViewInit, OnInit, Component, ViewChild, Input} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Operation } from '../../models/operation.models';

@Component({
  selector: 'app-list-operations',
  templateUrl: './list-operations.component.html',
  styleUrls: ['./list-operations.component.scss']
})
export class ListOperationsComponent implements OnInit,  AfterViewInit {

 
  @Input() datos!:Operation[] 
  @Input() titulo:string

  displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  dataSource!: MatTableDataSource<Operation>;

  constructor() { 
  }
  
  ngOnInit(): void {

   this.dataSource = new MatTableDataSource(this.datos)
    this.displayedColumns= [ "amount","concept","date","type"]
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
 

}
