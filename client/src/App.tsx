import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AddWaifu from "./pages/AddWaifu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddWaifu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
