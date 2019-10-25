import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfundrequestComponent } from './listfundrequest.component';

describe('ListfundrequestComponent', () => {
  let component: ListfundrequestComponent;
  let fixture: ComponentFixture<ListfundrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfundrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfundrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
