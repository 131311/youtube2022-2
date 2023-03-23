import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { SearchContextProvider } from "./context/SearchContext"
import { AuthContextProvider } from "./context/AuthContext"

const ContextWrapper = ({ children }) => {
  return (
    <AuthContextProvider>
      <SearchContextProvider>{children}</SearchContextProvider>
    </AuthContextProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>
)
