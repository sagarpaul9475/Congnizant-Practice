import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],

  providers: [
    NotificationService
  ],

  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

  constructor(
    public notificationService: NotificationService
  ) {}

  addNotification() {

    this.notificationService.add('Course enrolled successfully.');

  }

}

/*
providers: [NotificationService]

This creates a brand-new NotificationService instance
for every NotificationComponent.

It is NOT shared with the rest of the application,
demonstrating Angular's hierarchical dependency injection.
*/