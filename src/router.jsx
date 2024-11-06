import { createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import ErrorMsg from "./components/ErrorMsg"
import Loader from "./components/Loader"
import { lazy, Suspense } from "react"

const Home = lazy(() => import("./components/Home"))
const About = lazy(() => import("./components/About"))
const Contact = lazy(() => import("./components/Contact"))

const paths = [
  {
    path: "about",
    element: About,
  },
  {
    path: "contact",
    element: Contact,
  },
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorMsg />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      ...paths.map((ele) => ({
        path: ele.path,
        element: (
          <Suspense fallback={<Loader />}>
            <ele.element />
          </Suspense>
        ),
      })),
    ],
  },
])

export default router
