import {
  createBrowserRouter,
} from 'react-router-dom';
import {App} from '../App.tsx';
import {Error404} from '../components/pages/Error404.tsx';
import {Adidas} from '../components/pages/Adidas.tsx';
import {Puma} from '../components/pages/Puma.tsx';
import {Abibas} from '../components/pages/Abibas.tsx';
import {Model} from '../components/pages/Model.tsx';
import {Prices} from '../components/pages/Prices.tsx';
import {ProtectedPage} from '../components/pages/ProtectedPage.tsx';
import {ProtectedRoute} from '../components/pages/ProtectedRoute.tsx';


export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  PRICES: '/prices',
  MODEL: '/:model/:id',
  PROTECT: '/protect',
  ERROR404: '/*'
} as const


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error404/>,
    children: [
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
        path: PATH.PROTECT,
        element: (
          <ProtectedRoute>
            <ProtectedPage/>
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.ERROR404,
        element: <Error404/>,
      }
    ],
  },
]);

