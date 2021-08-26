import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllArchiveComponent } from './get-all-archive.component';

describe('GetAllArchiveComponent', () => {
  let component: GetAllArchiveComponent;
  let fixture: ComponentFixture<GetAllArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
