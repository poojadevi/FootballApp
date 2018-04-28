import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamscreenComponent } from './teamscreen.component';

describe('TeamscreenComponent', () => {
  let component: TeamscreenComponent;
  let fixture: ComponentFixture<TeamscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
