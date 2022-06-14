import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postDetail!: IPost
  constructor(
    private router: ActivatedRoute,
    private postService: PostService
  ) {
    const id = this.router.snapshot.paramMap.get('id')!;
    // this.productDetail = mockData.find(item => item.id == +id)!;
    this.postService.getPost(+id).subscribe(data => {
      this.postDetail = data
    })
  }
  ngOnInit(): void {
  }

}
