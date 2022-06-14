import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

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
