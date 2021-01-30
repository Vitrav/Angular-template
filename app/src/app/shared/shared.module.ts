import { NgModule,ModuleWithProviders } from '@angular/core';

//components
import{ NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [

    ],
    exports: [
        NavbarComponent
    ],
    providers: [],

  })
  export class SharedModule { 
      public static forRoot(): ModuleWithProviders<SharedModule>{
          return {
              ngModule: SharedModule};
          }
      }
  