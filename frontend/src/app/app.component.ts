import { Component, OnInit } from '@angular/core';
import { PublicService } from './services/public.service'
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 10 & Django Rest API (AUTH SYSTEM)';
  msg: any;
  constructor(private pService: PublicService, private authService: AuthService) {}

  ngOnInit(): void {
    this.showMessage();
  }

  showMessage() {
    this.pService.getMessage().subscribe(data => {
      this.msg = data,
      console.log(this.msg);
    });
  }

  logout() {
    this.authService.logout()
  }
}
