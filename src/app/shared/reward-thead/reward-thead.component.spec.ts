import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardTheadComponent } from './reward-thead.component';

describe('RewardTheadComponent', () => {
  let component: RewardTheadComponent;
  let fixture: ComponentFixture<RewardTheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardTheadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
