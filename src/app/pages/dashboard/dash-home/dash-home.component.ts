import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-dash-home',
  imports: [CommonModule, ModalComponent],
  templateUrl: './dash-home.component.html',
  styleUrl: './dash-home.component.css',
})
export class DashHomeComponent {
  userName = 'Isabella';
  amount = 2344.43;

  items = [
    {
      icon: '../assets/svg/tron_dao_icon.jpeg.svg',
      title: 'TRX',
      balance: 283.81,
    },
    {
      icon: '../assets/svg/usdt.svg',
      title: 'TRX',
      balance: 933.44,
    },
    {
      icon: '../assets/svg/POL.svg',
      title: 'POL',
      balance: 483.04,
    },
  ];

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
      name: 'Aid Lab',
      logo: '../assets/svg/Frame 1000001775.svg',
      value: 12.31,
      date: 'April 29, 2025',
      pending: false,
    },
  ];

  showModal: boolean = true; // Show modal on load

  closeModal() {
    this.showModal = false; // Close the modal
  }
}
