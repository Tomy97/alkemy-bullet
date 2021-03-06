import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(public loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this.loaderService.isLoading.next(true);

    return next.handle(req).pipe(
      finalize(()=>{
        this.loaderService.isLoading.next(false)
      })
    )
  }
}


