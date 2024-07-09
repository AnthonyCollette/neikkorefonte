import { createHashRouter, RouterProvider } from 'react-router-dom';
import './assets/scss/main.scss';
import Homepage from './views/Homepage';
import Concours from './views/Concours';

function App() {


  const router = createHashRouter([{
    path: "/",
    element: <Homepage />
  }, {
    path: "/giveaways",
    element: <Concours />
  }])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
