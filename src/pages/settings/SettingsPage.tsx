import React from 'react';
import {Settings} from "../../widgets/settings/Settings";
import {Outlet} from "react-router-dom";

export const SettingsPage = () => {
    return (
        <div>
            <Settings>
                <Outlet/>
            </Settings>
        </div>
    );
};

