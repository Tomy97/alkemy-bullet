import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServicesService } from 'src/app/services/http-services.service';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  

  constructor( private srv: HttpServicesService,  private router: Router ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });

   
  }


  onSubmit(): void{

   if(this.loginForm.invalid) return;
    
     this.srv.post('auth/login/',this.loginForm.value)
     .pipe(
      tap((c)=> {
          if(c['access_token']) {
            localStorage.setItem('token', c['access_token'])
            localStorage.setItem('user', JSON.stringify(c['user']))

          } else {
            catchError((err) => {
              // cuando este el alert se reemplaza
              console.error("error http post",err);
              throw err;
            })
          }
      })
    ) 
     .subscribe(data =>{
      console.log(data)
      this.router.navigateByUrl('/test');
    })
 
  }
}


