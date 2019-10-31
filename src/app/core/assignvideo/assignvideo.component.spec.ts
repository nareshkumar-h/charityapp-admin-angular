import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignvideoComponent } from './assignvideo.component';

describe('AssignvideoComponent', () => {
  let component: AssignvideoComponent;
  let fixture: ComponentFixture<AssignvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
