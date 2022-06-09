import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.auth.access_token$.getValue();
    if (accessToken) {
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
      });

      return next.handle(newRequest);
    }

    return next.handle(request);
  }
}
