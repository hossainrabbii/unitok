import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards',
  imports: [CommonModule],
  templateUrl: './rewards.component.html',
  styleUrl: './rewards.component.css',
})
export class RewardsComponent {
  // toggle button
  rewardsBtn: string = 'all';

  toggleContent(button: string) {
    this.rewardsBtn = button;
  }
  hasPendingRewards(): boolean {
    return this.rewards.some((reward) => reward.pending);
  }
  get pendingRewards() {
    return this.rewards.filter((reward) => reward.pending);
  }

  get nonPendingRewards() {
    return this.rewards.filter((reward) => !reward.pending);
  }
  hasNonPendingRewards(): boolean {
    return this.rewards.some((reward) => !reward.pending);
  }
  // rewards
  rewards = [
    {
      name: 'Alpha Ventures',
      logo: '../assets/svg/Frame 1000001775.svg',
      value: 22.31,
      date: 'April 25, 2025',
      pending: true,
    },
    {
      name: 'MetaFund Labs',
      logo: '../assets/svg/Frame 1000001775.svg',
      value: 42.31,
      date: 'April 27, 2025',
      pending: true,
    },
    {
      name: 'NovaBridge Capital',
      logo: '../assets/svg/Frame 1000001775.svg',
      value: 12.31,
      date: 'April 29, 2025',
      pending: false,
    },
    {
      name: 'SolanaX Syndicate	',
      logo: '../assets/svg/Frame 1000001775.svg',
      value: 22.31,
      date: 'April 21, 2025',
      pending: true,
    },
    {
      name: 'BitStack Ventures',
      logo: '../assets/svg/Frame 1000001775.svg',
      value: 42.31,
      date: 'April 17, 2025',
      pending: true,
    },
    {
      name: 'Quantia Partners',
      logo: '../assets/svg/Frame 1000001775.svg',
      value: 12.31,
      date: 'April 15, 2025',
      pending: false,
    },
  ];
}
