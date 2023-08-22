'use client'

import React from "react";
import './globals.css'
import Providers from "./Providers";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";


const Layout = ({ children }) => {


    return (
        <html lang="en">
            <body>

                <Providers>
                    <Header />
                    <Tabs />
                    {children}
                </Providers>
            </body>
        </html>
    )
}

export default Layout