import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemitsListComponent } from './remits/components/remits-list/remits-list.component';
import { getStoreModule, msalAuthModule, msalGuardCanActivate } from '@mezomon/shared-library-test';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const routes: Routes = [
  {
    path: '', 
    component: RemitsListComponent,
    canActivate:  [msalGuardCanActivate]
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    msalAuthModule,
    getStoreModule(),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: false,
        connectInZone: true,
      })
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
