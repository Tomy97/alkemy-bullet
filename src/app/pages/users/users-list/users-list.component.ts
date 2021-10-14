import { tap, map } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { Users } from './../Interfaces/users.interfaces'
import { HttpServicesService } from 'src/app/services/http-services.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  private url = `users/`
  displayedColumns = ['#', 'Email']
  UsersO$: Observable<Users[]>

  constructor(private http: HttpServicesService) {}

  ngOnInit(): void {
    this.UsersO$ = this.http.getAll(this.url).pipe(
      map((users: Users[]) => {
        return users['results']
      })
    )
  }
}
