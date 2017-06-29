import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenttoggleComponent } from './contenttoggle.component';

describe('ContenttoggleComponent', () => {
  let component: ContenttoggleComponent;
  let fixture: ComponentFixture<ContenttoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenttoggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenttoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
