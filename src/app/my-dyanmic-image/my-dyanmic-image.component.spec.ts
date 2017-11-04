import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDyanmicImageComponent } from './my-dyanmic-image.component';

describe('MyDyanmicImageComponent', () => {
  let component: MyDyanmicImageComponent;
  let fixture: ComponentFixture<MyDyanmicImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDyanmicImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDyanmicImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
