import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditDistrictComponent } from './create-edit-district.component';

describe('CreateEditDistrictComponent', () => {
  let component: CreateEditDistrictComponent;
  let fixture: ComponentFixture<CreateEditDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
