import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postList!: IPost[];
  constructor(  private postService :PostService) { 
  }

  ngOnInit(): void {
    this.showPosts();
  }
  showPosts() {
    this.postService.getPosts().subscribe(data => {
      this.postList = data
    })
  }

}
