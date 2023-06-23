import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signinForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public authService: AuthService,
  ) {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginUser() {
    this.authService.signIn(this.signinForm.value);
  }

}
