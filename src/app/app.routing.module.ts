import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemitsListComponent } from './remits/components/remits-list/remits-list.component';

const routes: Routes = [{path: '', component: RemitsListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
