import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionScreenComponent } from './competition-screen.component';

describe('CompetitionScreenComponent', () => {
  let component: CompetitionScreenComponent;
  let fixture: ComponentFixture<CompetitionScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
