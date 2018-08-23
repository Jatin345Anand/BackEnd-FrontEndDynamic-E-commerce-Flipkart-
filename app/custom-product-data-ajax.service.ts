import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CustomMobileClass } from './custom-mobile-class';
import { Observable, of } from 'rxjs';
// import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class CustomProductDataAjaxService {

  constructor(private http:Http) { 

  }
  callServerByhttp():Promise<CustomMobileClass[]>{
    var url:string = 'https://raw.githubusercontent.com/Jatin345Anand/Mobile-DataJSON/master/Mobile/Asus.json';
    return this.http.get(url).toPromise().then((response)=>{
      return response.json().mobiles as CustomMobileClass[];
  }).catch((error)=>{
    console.error('An error occurred', error);
  return Promise.reject(error.message || error);
  });
  }
  getData():string{


    return 'This is the data coming from the Service.......';
  }
}
