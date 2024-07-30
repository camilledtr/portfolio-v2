import { BrowserRouter, Route, Routes } from "react-router-dom"

import { routes } from "./routes"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((element, index) => {
          return (
            <Route
              path={element.endpoint}
              element={element.component}
              key={element.name}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
