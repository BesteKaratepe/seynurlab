import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { StoreProvider } from "./context/store";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import PageContainer from "./components/PageContainer"; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageContainer />}>
      <Route
        path="register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

const App = () => {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </StoreProvider>
  );
};

export default App;
