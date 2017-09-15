import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdminPanelComponent } from './main-admin-panel.component';

describe('MainAdminPanelComponent', () => {
  let component: MainAdminPanelComponent;
  let fixture: ComponentFixture<MainAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
