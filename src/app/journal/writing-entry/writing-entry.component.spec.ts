import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingEntryComponent } from './writing-entry.component';

describe('WritingEntryComponent', () => {
  let component: WritingEntryComponent;
  let fixture: ComponentFixture<WritingEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
