import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList!: IUser[];
  constructor( private userService :UserService) { }

  ngOnInit(): void {
    this.showUsers();
  }

  showUsers() {
    this.userService.getUsers().subscribe(data => {
      this.userList = data
    })
  }
  onRemoveItem(id: number) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm) {
      // call api xoa
      this.userService.removeUser(id).subscribe(() => {
        // reRender
        this.userList = this.userList.filter(item => item.id !== id);
      });
    }

  }

}
