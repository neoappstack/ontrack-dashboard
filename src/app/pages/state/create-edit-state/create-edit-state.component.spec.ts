import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditStateComponent } from './create-edit-state.component';

describe('CreateEditStateComponent', () => {
  let component: CreateEditStateComponent;
  let fixture: ComponentFixture<CreateEditStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
