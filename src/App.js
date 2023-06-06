import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import RootLayout from "./layouts/RootLayout";
import Projects from "./pages/Projects";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} /> */
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
