import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postList!: IPost[];
  constructor( private postService :PostService) { }

  ngOnInit(): void {
    this.showPosts();
  }

  showPosts() {
    this.postService.getPosts().subscribe(data => {
      this.postList = data
    })
  }
  onRemoveItem(id: number) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm) {
      // call api xoa
      this.postService.removePost(id).subscribe(() => {
        // reRender
        this.postList = this.postList.filter(item => item.id !== id);
      });
    }

  }
}
