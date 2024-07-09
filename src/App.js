import { createHashRouter, RouterProvider } from 'react-router-dom';
import './assets/scss/main.scss';
import Homepage from './views/Homepage';

function App() {

  const router = createHashRouter([{
    path: "/",
    element: <Homepage />
  }])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
