import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from '../App.jsx';
import { SignIn, SignUp, MainPage, ModelX, ModelY, ModelS, ModelRd } from '@pages';




const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/main-page" element={<MainPage />}>
          <Route path="/main-page/model-x" element={<ModelX />} />
          <Route path="/main-page/model-y" element={<ModelY />} />
          <Route path="/main-page/model-s" element={<ModelS />} />
          <Route path="/main-page/model-rd" element={<ModelRd />} />
        </Route>
        <Route>

        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Index;
