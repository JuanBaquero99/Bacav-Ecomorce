import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import Navbar from '../../Components/Navbar/index'
import './App.css'

const AppRoutes = () => { //Array function para retornar el 'routes'
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/my-account', element: <MyAccount /> },
      { path: '/my-order', element: <MyOrder /> },
      { path: '/my-orders', element: <MyOrders /> },
      { path: '/not-found', element: <NotFound /> },
      { path: '/sign-in', element: <Signin /> },
      { path: '/*', element: <NotFound /> },
      
    ])

    return routes
}

const App = () => {
  return (
      <ShoppingCartProvider>
          <BrowserRouter>
              <AppRoutes />
              <Navbar />
          </BrowserRouter>
      </ShoppingCartProvider>
  );
};

export default App
