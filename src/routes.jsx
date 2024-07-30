import Home from "./pages/Home"
import Project from "./pages/Project"

export const routes = [
  { name: 'home', endpoint: '/', component: <Home /> },
  { name: 'project', endpoint: '/:project', component: <Project /> },
]