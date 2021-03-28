import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditAuthorityComponent } from './create-edit-authority.component';

describe('CreateEditAuthorityComponent', () => {
  let component: CreateEditAuthorityComponent;
  let fixture: ComponentFixture<CreateEditAuthorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditAuthorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
