import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtfsComponent } from './ntfs.component';

describe('NtfsComponent', () => {
  let component: NtfsComponent;
  let fixture: ComponentFixture<NtfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NtfsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
