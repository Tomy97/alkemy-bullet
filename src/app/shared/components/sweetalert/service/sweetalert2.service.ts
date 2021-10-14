import { Injectable } from '@angular/core'
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root',
})
export class Sweetalert2Service {
  
  constructor() { }
  
  successAlert(title: string, text:string) {
    Swal.fire({
      icon: 'success',
      title,
      text,
    })
  }

  errorAlert(title: string, text:string) {
    Swal.fire({
      icon: 'error',
      title,
      text,
    })
  }

  infoAlert(title: string, text:string) {
    Swal.fire({
      icon: 'info',
        title,
        text,
    })
  }
}
