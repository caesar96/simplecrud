import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Post } from '../post.interface';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
	@HostBinding('class') clases = 'row';
	post: Post = {
		id: 0,
		name: '',
		email: '',
		title: '',
		content: '',
		date_creation: new Date()
	};

	edit = false;

	constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute)  { }

	ngOnInit() {
		const params = this.activatedRoute.snapshot.params;
		if (params.id) {
			this.postService.readPost(params.id).subscribe ( res => {
			    console.log(res);
			    this.post = res;
			    this.edit = true;
			  },
			  err => console.log(err)
			)
		}
	}

	savePost() {
		delete this.post.date_creation;
		delete this.post.id;
		this.postService.createPost(this.post).subscribe( res => {
			console.log(res);
			this.router.navigate(['/posts']);
		},
		err => console.error(err)
		)
	}

	editPost() {
		delete this.post.date_creation;
		this.postService.updatePost(this.post.id, this.post).subscribe( res => { 
		      console.log(res);
		      this.router.navigate(['/posts']);
		    },
		    err => console.error(err)
		)
	}	

}
