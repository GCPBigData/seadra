import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTecnicoComponent } from './create-tecnico.component';

describe('CreateTecnicoComponent', () => {
  let component: CreateTecnicoComponent;
  let fixture: ComponentFixture<CreateTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
