import { lazy } from 'react';

const Landing = lazy(() => import('../containers/Landing'));
const Login = lazy(() => import('../containers/Login'));
const NotFound = lazy(() => import('../containers/NotFound'));

export enum Routes {
  homepage = '/',
  login = '/login',
}

export const routes = [
  { exact: true, path: Routes.homepage, component: Landing },
  { path: Routes.login, component: Login },
  { component: NotFound },
]