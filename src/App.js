
import './App.css';
import NavbarComponent from "./components/navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Login from './components/login/login';

export default function App() {
    return (
        <div className="App">
            <NavbarComponent/>
                <Routes>
                        <Route path='/' element={<Login/>}/>
                        <Route path='/home' element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                </Routes>
        </div>
    );
}
