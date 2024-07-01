import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RemitsListComponent } from './components/remits-list/remits-list.component';

const routes: Routes = [{ path: '', component: RemitsListComponent }];

@NgModule({
  declarations: [RemitsListComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class RemitsModule {}
