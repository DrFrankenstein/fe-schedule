import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export const Layout: React.FC = () => <>
    <nav>
        <Link to="/sessions">Panels &amp; Events</Link> |
        <Link to="/services">Services</Link> |
        <Link to="/speakers">Speakers</Link>
    </nav>
    <Outlet />
</>;
