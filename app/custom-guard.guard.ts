import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomGuardGuard implements CanActivate {
  roles:string[] =["admin","guest"];
  constructor(private router:Router){

  }
  
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  // canActivate(route, state){
  //   if(this.roles.indexOf(this.getCurrentRole())>=0){
  //     return true;
  //   }
  //   else{
  //     this.router.navigate(['/mobiles/8999']);
  //   }
  // }
  getCurrentRole():string{
    return "admin";
  }
}
