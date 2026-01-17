import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Services from './pages/Services';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "AdminDashboard": AdminDashboard,
    "AdminLogin": AdminLogin,
    "Contact": Contact,
    "Courses": Courses,
    "Home": Home,
    "Services": Services,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};