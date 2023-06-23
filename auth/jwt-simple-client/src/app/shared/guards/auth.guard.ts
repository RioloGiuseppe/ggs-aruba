import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn) {
    router.navigate(['/log-in']);
  }

  return auth.isLoggedIn;
};


// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(public authService: AuthService, public router: Router) { }

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.authService.isLoggedIn !== true) {
//       window.alert('Access not allowed!');
//       this.router.navigate(['log-in']);
//     }
//     return true;
//   }
// }
