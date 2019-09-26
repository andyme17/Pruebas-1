import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUsuComponent } from './info-usu.component';

describe('InfoUsuComponent', () => {
  let component: InfoUsuComponent;
  let fixture: ComponentFixture<InfoUsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
