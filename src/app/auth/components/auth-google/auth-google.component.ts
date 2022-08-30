import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-google',
  templateUrl: './auth-google.component.html',
  styleUrls: ['./auth-google.component.css']
})
export class AuthGoogleComponent implements OnInit {



  constructor(
    private as : AuthService,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit() {


    (window as any).handleCredentialResponse = (response:any) => {
      const id_token = response.credential;
      console.log(id_token);
      console.log(response);
      this.as.signInWithGoogle(id_token).subscribe(console.log);
    }

  }

}
