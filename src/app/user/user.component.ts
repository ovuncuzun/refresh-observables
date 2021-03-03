import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name = '';
  users$: Observable<Array<{ name: string }>>;

  constructor(private userApi: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userApi.getUsers();
  }

  addUser() {
    this.userApi.addUser(this.name);
    this.name = '';
  }
}
