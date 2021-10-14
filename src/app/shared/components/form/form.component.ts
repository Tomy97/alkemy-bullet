import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() tipo: string

  Monedas: string[]= ['Peso', 'Dolar', 'Euro']

  Form: FormGroup
  constructor(private http: HttpServicesService) { }

  ngOnInit(): void {
    this.Form = new FormGroup({
      monto: new FormControl('', [Validators.required, Validators.min(1)]),
      concepto: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      fecha: new FormControl('', [Validators.required]),
      moneda: new FormControl('', [Validators.required]),
      //ternario que me devuelve el tipo de transacción
      type: new FormControl(this.tipo==='Ingreso'? 1:2)
    });
  }

  onSubmit(): void{
    if(this.Form.invalid) return;
    console.warn(this.Form.value);
    //envio http al backend
    
    this.http.post(`accounts/${this.Form.get('type').value}/movements/`, 
          this.Form.value).subscribe((result)=>{
            console.warn('result',result);
            
          })
  }

}
