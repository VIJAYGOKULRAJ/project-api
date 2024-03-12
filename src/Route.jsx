import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { WelcomePage } from "./pages/WelcomePage";
import { useSelector } from "react-redux";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { useState } from "react";



export const Body = () => {
  const data = useSelector((state) => state.LoginStore.LoginModel)
  const [isAuthenticated , setIsAuthenticated] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route path="/Account" element={<PrivateRoute isAuthenticated= {isAuthenticated}><Main/></PrivateRoute>} />
        <Route path='*' element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
};
