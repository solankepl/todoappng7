import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedtaskComponent } from './deletedtask.component';

describe('DeletedtaskComponent', () => {
  let component: DeletedtaskComponent;
  let fixture: ComponentFixture<DeletedtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
