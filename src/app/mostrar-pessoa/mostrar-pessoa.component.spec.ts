import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPessoaComponent } from './mostrar-pessoa.component';

describe('MostrarPessoaComponent', () => {
  let component: MostrarPessoaComponent;
  let fixture: ComponentFixture<MostrarPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
