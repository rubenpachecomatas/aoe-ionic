import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {

  pages = [
    {
      title: 'Civilizations',
      url: '/nav/principal'
    },
    {
      title: 'Add Civilization',
      url: '/nav/addciv'
    },
    {
      title: 'User',
      url: '/nav/user'
    }
  ];

  selectedPath = '';

  constructor(private router: Router, public afAuth: AuthService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
