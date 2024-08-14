import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<script type="module" src="/src/main.tsx"></script>

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Jobs from './components/Jobs/Jobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';


const router
  = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/applied',
          element: <AppliedJobs></AppliedJobs>,
          loader: () => fetch('/jobs.json')

        },
        {
          path: '/jobs',
          element: <Jobs></Jobs>
        },
        {
          path: '/job/:id',
          element: <JobDetails></JobDetails>,
          loader: () => fetch('../jobs.json')
        },

      ]
    },
  ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
