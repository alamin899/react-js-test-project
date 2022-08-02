import logo from './logo.svg';
import './App.css';
import NavbarComponent from "./components/navbar/Navbar";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
    return (
        <div className="App">
            <NavbarComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path='/home' element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
