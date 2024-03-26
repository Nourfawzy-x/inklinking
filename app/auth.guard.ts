import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localData = localStorage.getItem('userToken');
  if (localData != null) {
    const userRole = JSON.parse(atob(localData.split('.')[1])).role;

    if (userRole === 'admin' || route.url[0].path === 'home') {
      return true;
    } else {
      router.navigateByUrl('/home');
      return false;
    }
  } else {
    router.navigateByUrl('/login');

    return false;
  }
};
