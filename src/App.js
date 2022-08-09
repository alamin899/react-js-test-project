
import './App.css';
import {Routes, Route} from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Login from './components/auth/login';
import PrivateOutlet from './components/privateOutlet/PrivateOutlet';
import DashboardLayout from './components/layouts/DashboardLayout';
import Dashboard from './components/home/Dashboard';
import HomeLayout from './components/layouts/HomeLayout';
import LoginOutlet from './components/privateOutlet/LoginOutlet';
import Home from './components/home/Home';

export default function App() {
    return (
        <div className="App">
            
                <Routes>
                    <Route element={<HomeLayout />} >
                        <Route path='/' element={<Home />}/>
                        <Route path='/login' element={<LoginOutlet />}>
                            <Route path='/login' element={<Login />}/>
                        </Route>
                    </Route>
                        
                    <Route element={<DashboardLayout />} >
                        <Route path="/*" element={<PrivateOutlet />} >
                            <Route path='dashboard' element={<Dashboard />} />
                            <Route path="about" element={<About/>} />
                            <Route path="contact" element={<Contact />} />
                        </Route>
                    </Route>

                </Routes>
        </div>
    );
}
