import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDataTableComponent } from './ngx-data-table.component';

describe('NgxDataTableComponent', () => {
  let component: NgxDataTableComponent;
  let fixture: ComponentFixture<NgxDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
