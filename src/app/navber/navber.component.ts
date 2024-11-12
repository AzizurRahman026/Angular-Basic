import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navber',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './navber.component.html',
  styleUrl: './navber.component.css'
})
export class NavberComponent {
  titleStart: string = "Navber Start";
  titleEnd: string = "Navber End";

  @Input() dataRoot!: string;
  navber : string = "hello world";

  constructor() {}
}
