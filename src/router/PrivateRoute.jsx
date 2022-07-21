import React from "react"
import { Redirect } from "react-router-dom"
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard";
// Authentication

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]


const publicRoutes = [
  { path: "/login", component: Login },
]

export {publicRoutes, authProtectedRoutes}