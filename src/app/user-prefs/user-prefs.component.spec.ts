import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrefsComponent } from './user-prefs.component';

describe('UserPrefsComponent', () => {
  let component: UserPrefsComponent;
  let fixture: ComponentFixture<UserPrefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPrefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPrefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
