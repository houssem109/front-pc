import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  user = new User();
  err: number = 0;
  message: string = 'login ou mot de passe erronés..';

  constructor(private authService: AuthService, private router: Router) {}
  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
        let jwToken = data.headers.get('Authorization')!;
        this.authService.saveToken(jwToken);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.err = 1;
        if (err.error.errorCause == 'disabled')
          this.message =
            'Utilisateur désactivé, Veuillez contacter votre Administrateur';
      },
    });
  }
}
