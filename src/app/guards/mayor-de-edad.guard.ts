import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MayorDeEdadGuard implements CanActivate, CanLoad {
  // constructor(private authService: Auth) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const pass = route.queryParams['p'];

    // return this.authService.puedePasar();

    return of(true);

    // simulado
    // if (pass === '1234') {
    //   return of(true);
    // } else {
    //   return of(false);
    // }
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return of(true);
  }
}
