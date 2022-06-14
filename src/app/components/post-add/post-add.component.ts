import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  post: IPost = {
    title: "",
    image: "",
    createAt:"",
    categoryPostId:0,
    shortDesc:"",
    desc:"",
    categoriesPosts:""
    
  }
  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.postService.getPost(id).subscribe(data => {
        this.post = data
      })
    }
  }
  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.postService.updatePost(this.post).subscribe(data => {
        setTimeout(() => {
          // redirect về product list
          this.router.navigateByUrl('/admin/post');
        }, 2000)
      })
    }
    this.postService.addPost(this.post).subscribe(data => {
      setTimeout(() => {
        // redirect về product list
        this.router.navigateByUrl('/admin/post');
      }, 2000)
    });
  }

}
