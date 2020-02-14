import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-recipe-post',
  templateUrl: './http-recipe-post.component.html',
  styleUrls: ['./http-recipe-post.component.css']
})
export class HttpRecipePostComponent implements OnInit, OnDestroy {
  // url = 'https://angular-learning-908f0.firebaseio.com/';
  // postURL = this.url + 'posts.json';
  loadedPosts = [];
  isFetching = false;
  error = null;

  private errorSubscription: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) { }

  ngOnInit() {
    this.errorSubscription = this.postsService.errorSubject.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
    },
    error => {
      console.log('error: ', error);
      this.error = error.message;
      this.isFetching = false;
    });
  }

  onCreatePost(postData: Post) {
    console.log('postData: ', postData);
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
    },
    error => {
      console.log('error: ', error);
      this.error = error.message;
      this.isFetching = false;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    })
  }
  onErrorHandler() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }


}
