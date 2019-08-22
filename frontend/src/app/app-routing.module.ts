import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsComponent } from './posts/posts.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
	{ path: 'home',  component: HomeComponent },
	{ path: '',   redirectTo: '/home', pathMatch: 'full' },
	{ path: 'add-post',  component: AddPostComponent },
	{ path: 'posts', component: PostsComponent},
	{ path: 'posts/:id', component: ViewPostComponent},
	{ path: 'posts/edit/:id', component: AddPostComponent},	
	{ path: '**', component:  NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
