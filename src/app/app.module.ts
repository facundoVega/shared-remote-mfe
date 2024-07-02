import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { SharedLibraryComponent, HeaderComponent, FooterComponent, SidebarComponent, getStoreModule } from '@mezomon/shared-library-test'
import { StoreDevtoolsModule } from "@ngrx/store-devtools";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    getStoreModule(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      connectInZone: true,
    }),
    SharedLibraryComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
