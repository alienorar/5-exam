import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from '../App.jsx';
import { SignIn, SignUp, MainPage, ModelX, ModelY } from '@pages';




const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<MainPage />}>
          <Route index element={<ModelX />} />
          <Route path="model-y" element={<ModelY />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route>

        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Index;
