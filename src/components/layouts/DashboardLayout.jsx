import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbarComponent from '../navbar/DashboardNavbar';

export default function DashboardLayout() {
    return (
        <>
            <DashboardNavbarComponent />
            <Outlet />
        </>
    )
}