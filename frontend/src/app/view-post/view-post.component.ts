import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Post } from '../post.interface';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
	@HostBinding('class') classes = 'row';

	post: Post = {
		id: 0,
		name: '',
		email: '',
		title: '',
		content: '',
		date_creation: new Date()
	};
	exists = false;
	constructor(private postService : PostService, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		const params = this.activatedRoute.snapshot.params;
		if (params.id) {
			this.postService.readPost(params.id).subscribe(res => {
				this.post = res;
				this.exists = true;
			}, err => console.log(err));
		}
	}

}
