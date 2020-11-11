import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBrokerageComponent } from './create-brokerage.component';

describe('CreateBrokerageComponent', () => {
  let component: CreateBrokerageComponent;
  let fixture: ComponentFixture<CreateBrokerageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBrokerageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBrokerageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
