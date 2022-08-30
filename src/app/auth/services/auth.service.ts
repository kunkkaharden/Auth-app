import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, map, tap } from 'rxjs';
import { AuthResponse, Usuario } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'http://localhost:3000/api';
  private _usuario!: Usuario;
  get usuario() {
    return { ...this._usuario };
  }
  constructor(private http: HttpClient) {}
  signInWithGoogle(id_token: string) {
    const url = 'http://localhost:3000/auth/google';
    const body = { id_token };
    return of(true);
  }
  login(email: string, password: string) {
    const body = {
      email,
      password,
    };
    return this.http
      .post<AuthResponse>(this.baseUrl + '/auth/login', body)
      .pipe(
        tap((resp) => {
          if (resp.email) {
            localStorage.setItem('token', resp.token!);
            this._usuario = {
              email: resp.email,
            };
          }
        }),
        map((r) => (r.email ? true : false)),
        catchError((err) => of(err.error.message))
      );
  }

  validarToken() {
    const url = this.baseUrl + '';
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.get(url, { headers });
  }
}
