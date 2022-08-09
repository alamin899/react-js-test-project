import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavbar from '../navbar/HomeNavbar';

export default function HomeLayout() {
    return (
        <>
            <HomeNavbar />
            <Outlet />
        </>
    )
}