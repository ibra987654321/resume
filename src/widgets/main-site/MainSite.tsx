import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import Portfolio from "../../components/portfolio/Portfolio";
import Footer from "../../components/footer/Footer";

import LocaleChange from "../../components/locale/LocaleChange";
const MainSite = () => {
    return (
        <div className="pb-10">
            <Header children={<Navigation children={<LocaleChange />} />}/>
            <About/>
            <Portfolio/>
            <Experience/>
            <Footer />
            <ToastContainer/>
        </div>
    );
};

export default MainSite;