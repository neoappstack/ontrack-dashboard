import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditSubdivisionComponent } from './create-edit-subdivision.component';

describe('CreateEditSubdivisionComponent', () => {
  let component: CreateEditSubdivisionComponent;
  let fixture: ComponentFixture<CreateEditSubdivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditSubdivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditSubdivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
