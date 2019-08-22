import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  API_URI = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  readPosts() {
    return this.http.get(`${this.API_URI}/`);
  }

  readPost(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  deletePost(id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  createPost(post: Post) {
    return this.http.post(`${this.API_URI}/`, post);
  }

  updatePost(id: string|number, updatedPost: Post): Observable<Post> {
    return this.http.put(`${this.API_URI}/${id}`, updatedPost);
  }

}
