import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, alternateurl:any): any {
    if(value){
      return value;
    }
    else{
      return alternateurl;
    }
  }

}
