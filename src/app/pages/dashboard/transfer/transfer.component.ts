import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer',
  imports: [CommonModule],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css',
})
export class TransferComponent {
  totalAmount = 0;
  availableBalance = 293.94;
  trsCode = 'TEThXiEjoBhq7615vQR1bogHGuxWSygnaX';

  copied = false;

  copyToSingleClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Copied to clipboard:', text);
        this.copied = true;

        setTimeout(() => {
          this.copied = false;
        }, 1000);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  }

  copiedTxid: string | null = null;

  copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Copied to clipboard:', text);
        this.copiedTxid = text;

        setTimeout(() => {
          this.copiedTxid = null;
        }, 1000);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  }

  // history button
  historyBtn: string = 'trx';

  toggleContent(button: string) {
    this.historyBtn = button;
  }

  datas = [
    {
      date: 'April 16, 2025-21:41',
      type: 'Withdraw',
      amount: 43.32,
      destination: 'Hxd044dsfjkns499934mviosd',
      txid: 'Lkd2343343i4jjrpowejrpwe',
      status: 'Completed',
    },
    {
      date: 'April 13, 2025-01:41',
      type: 'Withdraw',
      amount: 143.32,
      destination: 'POdd044dsfjkns499934mviosd',
      txid: 'Klds2343343i4jjrpowejrpwe',
      status: 'Pending',
    },
    {
      date: 'April 10, 2025-11:41',
      type: 'Withdraw',
      amount: 33.32,
      destination: 'HGud044dsfjkns499934mviosQs',
      txid: 'SAd2343343i4jjrpowejrpaYd',
      status: 'Completed',
    },
  ];
  formatid(txid: string): string {
    if (!txid) return '';
    if (txid.length <= 6) return txid;
    return `${txid.slice(0, 3)}.....${txid.slice(-3)}`;
  }
}
