import { lazy } from 'react';

const Landing = lazy(() => import('../containers/Landing'));
const Login = lazy(() => import('../containers/Login'));
const NotFound = lazy(() => import('../containers/NotFound'));
const Community = lazy(() => import('../containers/Community'));

export enum Routes {
  homepage = '/',
  login = '/login',
  communities = '/communities',
}

export const routes = [
  { exact: true, path: Routes.homepage, component: Landing },
  { path: Routes.login, component: Login },
  { path: `${Routes.communities}/:name`, component: Community },
  { component: NotFound },
];
