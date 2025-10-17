import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  headerText = 'Testing Angular Applications';

  public router = inject(Router);
  // constructor(public router: Router) { }

  // ngOnInit(): void {
  // }

  //TODO #6

  showFeedbackPage(): void {
    this.router.navigate(['feedback']);
  }
}
