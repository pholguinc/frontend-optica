import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      let errMessage = '';

      if (err.error instanceof ErrorEvent) {
        errMessage = `An error occurred: ${err.error.message}`;
      } else {
        errMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }

      return throwError(() => errMessage);
    })
  );
};
