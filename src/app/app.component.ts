import { Component, OnInit } from '@angular/core';
import { LibRoute, MsalCustomService, activeUSer, currentUser } from '@mezomon/shared-library-test';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'remits';
  
  routes: LibRoute[] = [
    { title: 'remits', link:''}
  ]

  $user = this.store.select(activeUSer)

  constructor(
    private msalCustomService: MsalCustomService,
    private store: Store,
  ) {}

  getStore(): Store {
    return this.store;
  }

  ngOnInit(): void {
    this.msalCustomService.checkLogin().subscribe((userName)=> { 
      this.store.dispatch(currentUser({userName: userName}));
    });
  }

  logout(): void {
    this.msalCustomService.logout();
  }
}
