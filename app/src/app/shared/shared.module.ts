import { NgModule,ModuleWithProviders } from '@angular/core';

//components
import{ NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [

    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ],
    providers: [],

  })
  export class SharedModule { 
      public static forRoot(): ModuleWithProviders<SharedModule>{
          return {
              ngModule: SharedModule};
          }
      }
  