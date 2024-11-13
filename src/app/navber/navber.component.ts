import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navber',
  standalone: true,
  imports: [],
  templateUrl: './navber.component.html',
  styleUrl: './navber.component.css'
})
export class NavberComponent  implements OnInit {
  titleStart: string = "Navber Start";
  titleEnd: string = "Navber End";



  @Input() dataRoot!: string;
  navberMessage : string = "hello world";
  

  // private authService = Inject(ServiceService);
  private authService = inject(ServiceService);
  // constructor(private authService: ServiceService) {}
  
  ngOnInit() {
    console.log("Ng onInit called...");
    // Call the authService home method when component initializes
    this.authService.home().subscribe(
      (response: any) => {
        console.log("Response is: ", response.message);
        this.navberMessage = response.message;
      },
      (error: any) => {
        console.error('Login failed:', error);
      }
    );
  }


}
