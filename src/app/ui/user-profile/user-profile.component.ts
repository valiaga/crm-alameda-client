import { AuthService } from '../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.signOut();
  }

}
