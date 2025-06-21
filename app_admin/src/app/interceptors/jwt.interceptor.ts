import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';

export const JwtInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const token = localStorage.getItem('travlr-token');

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  } else {
    return next(req);
  }
};
