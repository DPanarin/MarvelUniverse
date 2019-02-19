import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {LoaderNotifyService} from './loader-notify.service';
import {catchError, finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyInterceptorService implements HttpInterceptor {

  apiKey = '75330f94d39cceb8e779af33465e8cfe';

  constructor(private status: LoaderNotifyService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.status.setRequestStatus(req.url, false);

    const keyReq = req.clone({
      setParams: {
        apikey: this.apiKey,
        limit: '48'
      }
    });

    return next.handle(keyReq).pipe(
      finalize(() => {
        this.status.setRequestStatus(req.url, true);
      }),
      catchError((err: any) => {
        this.status.setRequestStatus('', true);
        console.log(err.status);
        return throwError(err);
      })
    );
  }
}
