import React from 'react';
import './App.css';
import MainPage from "./pages/main-page/MainPage";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {SettingsPage, SettingsPortfolioPage, SettingsExperiencePage} from "./pages";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/settings/" element={<SettingsPage/>}>
                            <Route path="/settings/experience" element={<SettingsExperiencePage/>}/>
                            <Route path="/settings/portfolio" element={<SettingsPortfolioPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
