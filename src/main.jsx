
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import FBConnection from './Components/FBConnection';
import FBIntegration from './Components/FBIntegration';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children : [
      {
        path: '/',
        element:<Signup/>,
      },
      {
        path: '/Login',
        element:<Login/>,
      },
      {
        path: '/FBConnection',
        element:<FBConnection/>,
      },
      {
        path: '/FBIntegration',
        element:<FBIntegration/>,
      },
      
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);




