import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { FiterLComponent } from './filter/fiter-l/fiter-l.component';
import { FiterRComponent } from './filter/fiter-r/fiter-r.component';
import { RAMComponent } from './filter/fiter-l/ram/ram.component';
import { PRICEComponent } from './filter/fiter-l/price/price.component';
import { HeaderListComponent } from './filter/fiter-r/header-list/header-list.component';
import { MainItemMobileComponent } from './filter/fiter-r/main-item-mobile/main-item-mobile.component';
import { Item1MComponent } from './filter/fiter-r/main-item-mobile/item1-m/item1-m.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomPipePipe } from './custom-pipe.pipe';
// import { FilterLRamComponent } from './Filter/fiter-l/filter-l-ram/filter-l-ram.component';
// import { FilterLeftComponent } from './Filter/filter-left/filter-left.component';
// import { FilterRightComponent } from './Filter/filter-right/filter-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    FooterComponent,
    FiterLComponent,
    FiterRComponent,
    RAMComponent,
    PRICEComponent,
    HeaderListComponent,
    MainItemMobileComponent,
    Item1MComponent,
    CustomDirectiveDirective,
    CustomPipePipe
      // FilterLeftComponent,
    // FilterRightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
