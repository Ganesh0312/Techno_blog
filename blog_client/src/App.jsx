import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import FooterCom from "./components/FooterCom";
import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <FooterCom />
      </BrowserRouter>
    </>
  );
};

export default App;
