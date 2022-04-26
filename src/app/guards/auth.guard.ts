import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { FireService } from '../service/fire.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private router:Router,private fireserviceService:FireService){ 
    
  }
   canActivate(
    ) {    
       if (!this.fireserviceService.getAuthStatus()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
}
}
