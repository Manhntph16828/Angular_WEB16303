import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: IUser = {
    name: "",
    position: "",
    about:"",
    cv:""
  }
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.userService.getUser(id).subscribe(data => {
        this.user = data
      })
    }
  }
  onSubmit() {
    
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.userService.updateUser(this.user).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/user');
        }, 2000)
      })
    }
    this.userService.addUser(this.user).subscribe(data => {
      setTimeout(() => {
        this.router.navigateByUrl('/admin/user');
      }, 2000)
    });
  }

}
