import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { WelcomePage } from "./pages/WelcomePage";

export const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
          <Route path="/Account" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
