import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterOutlet,
  RouterLink,
} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,

  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  activeLink: string = '';

  ngOnInit() {
    const savedLink = localStorage.getItem('activeLink');
    if (savedLink) {
      this.activeLink = savedLink;
    }
  }

  setActive(link: string) {
    this.activeLink = link;
    localStorage.setItem('activeLink', link);
  }
}
