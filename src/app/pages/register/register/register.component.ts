import { Sweetalert2Service } from './../../../shared/components/sweetalert/service/sweetalert2.service'
import { HttpClient } from '@angular/common/http'
import { HttpServicesService } from 'src/app/services/http-services.service'
import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide = true

  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
  enviarForm: boolean = false
  private url: string = `auth/register/`

  registerForm: FormGroup = this.FormBuilder.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  })

  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpServicesService,
    private sweet: Sweetalert2Service,
    private router: Router,
  ) {}
  ngOnInit(): void {}

  campNotValid(camp: string) {
    return (
      this.registerForm.get(camp)?.invalid &&
      this.registerForm.get(camp)?.touched
    )
  }

  get firstNameErrMsg(): string {
    const error = this.registerForm.get('firstName')?.errors
    if (error?.required) {
      return 'El campo First Name es requerido '
    } else if (error?.pattern) {
      return 'El valor ingresado no es de formato valido'
    }
  }

  get lastNameErrMsg(): string {
    const error = this.registerForm.get('lastName')?.errors
    if (error?.required) {
      return 'El campo Last Name es requerido'
    }
  }

  get emailErrMsg(): string {
    const error = this.registerForm.get('email')?.errors

    if (error?.required) {
      return 'Este campo es obligatorio'
    } else if (error?.pattern) {
      return 'El mail ingresado no es de formato valido'
    }
  }

  get passwordErrMsg(): string {
    const error = this.registerForm.get('password')?.errors

    if (error?.required) {
      return 'El campo Password es requerido'
    } else if (error?.minlength) {
      return 'El campo debe tener 8 o mas caracteres'
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.enviarForm = true
      this.http.post(this.url, this.registerForm.value).subscribe(
        (data) => {
          this.sweet.successAlert(
            '¡Felicidades!',
            '¡Te has registrado correctamente!',
          )
          this.router.navigateByUrl('/login')
        },
        (error) => {
          this.sweet.errorAlert('Error', 'No se pudo registrar')
        },
      )
      this.registerForm.reset()
    } else {
      return
    }
  }
}
