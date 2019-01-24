// // src/app/auth/token.interceptor.ts
// import { Injectable } from '@angular/core';
// import {
//     HttpRequest,
//     HttpHandler,
//     HttpEvent,
//     HttpInterceptor
// } from '@angular/common/http';
// import { AuthenticationService} from "../_services";
// import { Observable } from 'rxjs';
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//     constructor(public auth: AuthenticationService) {}
//
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//
//         console.log(JSON.stringify(request));
//         // request = request.clone({
//         //     setHeaders: {
//         //         Authorization: `Bearer ${this.auth.getToken()}`,
//         //         "Access-Control-Allow-Origin": "*"
//         //     }
//         // });
//         return next.handle(request);
//     }
// }
