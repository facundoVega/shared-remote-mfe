import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './Components.module';
import { HeaderComponent } from './header/header.component';
import { TestService } from '../services/test.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule, HeaderComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /**
   *
   */
  constructor(private testService: TestService) {
  }

  heroes = this.testService.getHeroes();
}
