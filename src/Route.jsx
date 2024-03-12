import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { WelcomePage } from "./pages/WelcomePage";
import { useSelector } from "react-redux";

export const Body = () => {
  const data = useSelector((state) => state.LoginStore.LoginModel)
  // console.log(data , 'LoginData');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
          <Route path="/Account" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
