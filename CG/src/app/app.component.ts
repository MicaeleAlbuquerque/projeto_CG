import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido: era "styleUrl"
})
export class HomepageComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    if (this.isSidebarOpen) {
      this.isSidebarOpen = false;
    }
  }
}