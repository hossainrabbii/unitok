import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  inputNumber: number | null = null;
  buttonText: string = 'Secure your account';
  buttonBgColor: string = 'bg-[#325EEA]';
  @Output() close = new EventEmitter<void>();

  onSubmit() {
    this.buttonText =
      '<img src="../assets/svg/circle-check-w.svg" alt="Success" class="w-5 h-5 inline" />Account Secured';

    this.buttonBgColor = 'bg-green-500';

    setTimeout(() => {
      this.closeModal();
    }, 1000);
  }

  closeModal() {
    this.close.emit();
  }
}
