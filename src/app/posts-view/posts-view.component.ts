import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit-service.service';
import { Posts } from '../interfaces/Posts';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {
  posts:Posts;

  constructor(private rService:RedditService) { }

  ngOnInit(): void {
    this.rService.getPosts().subscribe(
      (data: Posts) => this.posts = { ...data }, 
      error => console.error(error)
    );
  }

}
