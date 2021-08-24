import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguradServiceService } from './authgurad-service.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthguradServiceService, private router: Router) { }

  canActivate(): boolean {
    if (this.Authguardservice.gettoken()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
