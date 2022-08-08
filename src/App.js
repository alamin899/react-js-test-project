
import './App.css';
import NavbarComponent from "./components/navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Login from './components/auth/login';
import PrivateOutlet from './components/privateOutlet/PrivateOutlet';

export default function App() {
    return (
        <div className="App">
            <NavbarComponent />
                <Routes>
                        <Route path='/' element={<Login />}/>
                        <Route path='/login' element={<Login />}/>
                        <Route path="/*" element={<PrivateOutlet />} >
                            <Route path='dashboard' element={<Home />} />
                            <Route path="about" element={<About/>} />
                            <Route path="contact" element={<Contact />} />
                        </Route>
                    
                </Routes>
        </div>
    );
}
