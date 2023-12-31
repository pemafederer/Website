import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Layout(){

    return(
        <div>
            <SpeedInsights >
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            </SpeedInsights>
        </div>
    )
}