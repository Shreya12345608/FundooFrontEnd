import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTrashComponent } from './get-all-trash.component';

describe('GetAllTrashComponent', () => {
  let component: GetAllTrashComponent;
  let fixture: ComponentFixture<GetAllTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllTrashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
