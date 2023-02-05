import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routing } from "pages";

const router = createBrowserRouter(routing);
export const withRouter = () => () => <RouterProvider router={router} />
