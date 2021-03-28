import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditThanaComponent } from './create-edit-thana.component';

describe('CreateEditThanaComponent', () => {
  let component: CreateEditThanaComponent;
  let fixture: ComponentFixture<CreateEditThanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditThanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditThanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
