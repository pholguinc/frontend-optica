import { HttpInterceptorFn} from '@angular/common/http';


export const httpRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
    },
  });

  return next(clonedRequest);
};
