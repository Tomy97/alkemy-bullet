import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteConstants } from '../../constants/route-constants';
import { HttpServicesService } from '../../../services/http-services.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {
  public isCollapsed: boolean = true
  navItem: RouteConstants[] = RouteConstants.listItem
  UserData: User = null;
  
  
  constructor(public route: ActivatedRoute, private rout: Router,  private srv: HttpServicesService ) { 
  }

  ngOnInit(): void {

      
  
  this.getUserLogged()
  }

  loguot() {
    localStorage.clear();
    this.rout.navigateByUrl('/login');
   
  }

  getUserLogged() {

    const user =JSON.parse(localStorage.getItem('user'));
     return this.UserData =(user)

  }
}
