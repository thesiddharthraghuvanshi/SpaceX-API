import { HTTP_INTERCEPTORS, HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    withCredentials: false,
  });
  return next(req);
};

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
];