import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokeragesComponent } from './brokerages.component';

describe('BrokeragesComponent', () => {
  let component: BrokeragesComponent;
  let fixture: ComponentFixture<BrokeragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokeragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokeragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
