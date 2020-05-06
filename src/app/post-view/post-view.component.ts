import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../interfaces/Posts';
import { RedditService } from '../reddit-service.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  @Input() myPost:Post;

  constructor(private rService: RedditService) { }

  ngOnInit(): void {
  }

}
