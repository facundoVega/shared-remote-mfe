import { Component, OnInit } from '@angular/core';
import { activeUSer } from '@mezomon/shared-library-test';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-remits-list',
  templateUrl: './remits-list.component.html',
  styleUrl: './remits-list.component.scss'
})
export class RemitsListComponent implements OnInit{

  private store!: Store;
  $user!: Observable<string | undefined>;

  ngOnInit(): void {
    if((window as any).Store)  {
      this.store = (window as any).Store;
      this.$user =  this.store.select(activeUSer)
    }
    
  }
}
