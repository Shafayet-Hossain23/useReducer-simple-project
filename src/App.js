import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/routes';



function App() {
  const router = routes
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
