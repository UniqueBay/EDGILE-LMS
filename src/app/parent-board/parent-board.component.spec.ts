import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBoardComponent } from './parent-board.component';

describe('ParentBoardComponent', () => {
  let component: ParentBoardComponent;
  let fixture: ComponentFixture<ParentBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
