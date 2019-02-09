import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routers: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    this.routers.navigate(['/servers', id, 'edit'], {queryParams: {
      allowEdit: 1
    }});
  }

  public onLogin() {
    this.authService.login();
  }

  public onLogout() {
    this.authService.logout();
  }

}
