import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AddWaifu from "./pages/AddWaifu";
import UpdateWaifu from "./pages/UpdateWaifu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddWaifu />} />
          <Route path="/waifus/:id/update" element={<UpdateWaifu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
