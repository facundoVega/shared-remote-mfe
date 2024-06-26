import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TestService } from '../services/test.service';
import { environmentProps } from '../environments/environment'

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
  ],
  exports: [
    FooterComponent
  ],
  providers: [
    TestService,
    {
      provide: 'environment',
      useValue: environmentProps,
    },

  ],
  bootstrap: []
})
export class ComponentsModule { }
