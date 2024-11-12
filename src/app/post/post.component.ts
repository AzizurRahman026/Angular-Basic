import { Component } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostListComponent, RouterLink, RouterOutlet],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent {
  titleStart:string = "Post title start...";
  titleEnd:string = "Post title end...";
  postToPostList: string = "Alhamdulillah post to post-list data passing...";
}
