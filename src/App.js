import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage";
import Home from "./components/Home";
import { Login } from "./components/Login";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/not_found" element={<ErrorPage />} />
      </Routes>      
    </>
  )
}

export default App;