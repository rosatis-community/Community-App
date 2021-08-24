import { lazy } from 'react';

const Landing = lazy(() => import('../containers/Landing'));
const Login = lazy(() => import('../containers/Login'));
const NotFound = lazy(() => import('../containers/NotFound'));
const Community = lazy(() => import('../containers/Community'));
const Post = lazy(() => import('../containers/Post'));

export enum Routes {
  homepage = '/',
  login = '/login',
  communities = '/communities',
  posts = '/communities',
}

export const routes = [
  { exact: true, path: Routes.homepage, component: Landing },
  { path: Routes.login, component: Login },
  { exact: true, path: `/communities/:name`, component: Community },
  { path: `/communities/:name/posts/:id`, component: Post },
  { component: NotFound },
];
