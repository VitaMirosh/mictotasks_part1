import {
  createBrowserRouter, Navigate, Outlet,
  RouteObject,
} from 'react-router-dom';
import {App} from '../App.tsx';
import {Error404} from '../components/pages/Error404.tsx';
import {Adidas} from '../components/pages/Adidas.tsx';
import {Puma} from '../components/pages/Puma.tsx';
import {Abibas} from '../components/pages/Abibas.tsx';
import {Model} from '../components/pages/Model.tsx';
import {Prices} from '../components/pages/Prices.tsx';
import {ProtectedPage} from '../components/pages/ProtectedPage.tsx';
import {Login} from '../components/pages/Login.tsx';


export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  PRICES: '/prices',
  MODEL: '/:model/:id',
  PROTECT: '/protect',
  ERROR404: '/error',
  LOGIN: '/login',
} as const


const publicRoutes:RouteObject[] = [

      {
        path: PATH.ADIDAS,
        element: <Adidas/>,
      },
      {
        path: PATH.PUMA,
        element: <Puma/>,
      },
      {
        path: PATH.ABIBAS,
        element: <Abibas/>,
      },
      {
        path: PATH.PRICES,
        element: <Prices/>,
      },
      {
        path: PATH.MODEL,
        element: <Model/>,
      },
      {
        path: PATH.ERROR404,
        element: <Error404/>,
      },
      {
        path: PATH.LOGIN,
        element: <Login/>,
      }
]
const privateRoutes:RouteObject[] = [
  {
    path: PATH.PROTECT,
    element:
      <ProtectedPage/>
  },
]
export const PrivateRoutes = () => {
  const isAuth= true
  return isAuth ? <Outlet/> :<Navigate to={'/login'}/>
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<Navigate to={PATH.ERROR404}></Navigate>,

    children: [
      {
element:<PrivateRoutes/>,
        children:privateRoutes
      },
      ...publicRoutes,

    ],
  },
]);

