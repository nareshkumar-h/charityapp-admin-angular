import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfundrequestComponent } from './addfundrequest.component';

describe('AddfundrequestComponent', () => {
  let component: AddfundrequestComponent;
  let fixture: ComponentFixture<AddfundrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfundrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfundrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
