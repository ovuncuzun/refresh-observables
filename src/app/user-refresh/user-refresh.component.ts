import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../shared/user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-refresh',
  templateUrl: './user-refresh.component.html',
  styleUrls: ['./user-refresh.component.scss']
})
export class UserRefreshComponent implements OnInit {
  name = '';
  users$: Observable<Array<{ name: string }>>;
  refreshUsers$ = new BehaviorSubject<boolean>(true);

  constructor(private userApi: UserService) { }

  ngOnInit(): void {
    this.users$ = this.refreshUsers$.pipe(switchMap(() => this.userApi.getUsers()));
  }

  addUser() {
    this.userApi.addUser(this.name);
    this.name = '';
    this.refreshUsers$.next(false);
  }
}
