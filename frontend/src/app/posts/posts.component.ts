import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Post } from '../post.interface';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
	@HostBinding('class') classes = 'row';

	posts: any = [];

	constructor(private postService: PostService) { }

	ngOnInit() {
		this.readPosts();
	}

	readPosts() {
		this.postService.readPosts().subscribe( res => {
			let out: any;
			this.posts = res;
		}, err => console.log(err));
	}

	deletePost (postId: string) {
		this.postService.deletePost(postId).subscribe(res => {
			this.readPosts();
		}, err => console.log(err));
	}

}
