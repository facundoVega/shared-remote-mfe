import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestService } from '../services/test.service';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
  ],
  exports: [
    FooterComponent
  ],
  providers: [TestService],
  bootstrap: []
})
export class ComponentsModule { }
