import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Notfound from "./pages/Notfound.tsx";
import User from "./pages/User.tsx";
import Linkone from "./pages/Linkone.tsx";
import Linktwo from "./pages/Linktwo.tsx";
import Login from "./pages/Login.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}>
            <Route path="/Linkone" element={<Linkone />} />
            <Route path="/Linktwo" element={<Linktwo />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:name" element={<User />} />
        </Route>

        <Route path="*" element={<Notfound />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode> 
);
