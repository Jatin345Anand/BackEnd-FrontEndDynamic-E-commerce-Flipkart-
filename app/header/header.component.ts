import { Component, OnInit } from '@angular/core';
import { CustomProductDataAjaxService } from '../custom-product-data-ajax.service';
import { Input,Output,ViewEncapsulation,EventEmitter } from '@angular/core';
import { CustomMobileClass } from '../custom-mobile-class'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   itemMobileArray:CustomMobileClass[];
   @Input()
   sendtoAnathorCom:string;
   @Output()
   callparentEmit:EventEmitter<string> = new EventEmitter<string>();
   private title: string;
  
   constructor(private MyService:CustomProductDataAjaxService) {
    
   }
   AjaxByHTTP(){
    this.MyService.callServerByhttp().then(item=>{
      console.log("Getting the data in Promise = ",item);
      this.itemMobileArray = item;
      console.log("The Mobile Item Array = ",this.itemMobileArray);
    })
   }
   AjaxByObservalbe(){

   }
   callParent(event){
    this.callparentEmit.emit('Hi am header...');
    console.log("Do ajax by http...");
    this.AjaxByHTTP();
    console.log("Do ajax by observable...");
    this.AjaxByObservalbe();
   }
  ngOnInit() {
  }

}
