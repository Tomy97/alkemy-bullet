import { Sweetalert2Service } from './../sweetalert/service/sweetalert2.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() isRaised: boolean;
 
  constructor( private Sweetalert2Service: Sweetalert2Service ) { }

  ngOnInit(): void {
    
  }

  onClick(): void {
    alert('llame al click');
  }

  get successAlert() {
    return this.Sweetalert2Service.successAlert('Salio bien', 'Esto es un texto');
  }

  get errorAlert() {
    return this.Sweetalert2Service.errorAlert('Salio Mal', 'Esto es un texto');
  }
  
  get informationAlert() {
    return this.Sweetalert2Service.infoAlert('Alerta de Info', 'Esto es un texto');
  }
}

