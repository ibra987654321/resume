import React from 'react';
import './App.css';
import MainPage from "./pages/main-page/MainPage";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import SettingsPage from "./pages/settings/SettingsPage";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/settings" element={<SettingsPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
