import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRefreshComponent } from './user-refresh.component';

describe('UserRefreshComponent', () => {
  let component: UserRefreshComponent;
  let fixture: ComponentFixture<UserRefreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRefreshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
