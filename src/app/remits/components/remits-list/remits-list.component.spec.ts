import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitsListComponent } from './remits-list.component';

describe('RemitsListComponent', () => {
  let component: RemitsListComponent;
  let fixture: ComponentFixture<RemitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemitsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
