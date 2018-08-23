import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RAMComponent implements OnInit {
  private isShow: boolean;
  private flagforvaluesoffilterRAM: boolean;
  private angleclass: string;
  private myclassforitag: string;
  private flagforvaluesoffilterRAMclearall: boolean;
  constructor() {
    this.isShow = true;
    this.flagforvaluesoffilterRAM = true;
    this.angleclass = "";
    this.myclassforitag = 'fas fa-angle-down';
    this.flagforvaluesoffilterRAMclearall = true;
  }

  ngOnInit() {
  }
  doshowhideonfilterRAM(event: Event): void {
    if (!this.isShow) {
      console.log("false");
      this.flagforvaluesoffilterRAM = false;

      this.myclassforitag = 'fas fa-angle-up';
      this.isShow = !this.isShow;
    }
    else if (this.isShow) {
      console.log("true");
      this.flagforvaluesoffilterRAM = true;

      this.myclassforitag = 'fas fa-angle-down';
      this.isShow = !this.isShow;

    }

  }


}
