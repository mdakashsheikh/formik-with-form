import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserForm from "./pages/UserForm";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/about" element={ <About/> }/>
                <Route path="/contact" element={ <Contact/> }/>
                <Route path="/userform" element={ <UserForm/> }/>
            </Routes>
        </BrowserRouter>
    )
}
