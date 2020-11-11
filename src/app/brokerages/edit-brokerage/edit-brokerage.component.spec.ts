import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBrokerageComponent } from './edit-brokerage.component';

describe('EditBrokerageComponent', () => {
  let component: EditBrokerageComponent;
  let fixture: ComponentFixture<EditBrokerageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBrokerageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBrokerageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
