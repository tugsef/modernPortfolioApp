"use client";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";
import Providers from "@/context/providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sefa Demirtaş</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>
          <main>
            <div className="bg-gradient-to-r from-indigo-600 to-sky-300  dark:bg-gradient-to-r  dark:from-bg-slate-100  dark:to-slate-200 pb-10">
            
              <ThemeSwitcher />
            
              <div className="mx-auto h-25  gap-3 px-5  grid grid-cols-1 lg:grid-cols-4 lg:gap-4 lg:px-14">
                <div className="lg:my-0 bg-white rounded-xl dark:bg-slate-600 dark:text-white">
                  <Sidebar />
                </div>
                <div className="bg-white lg:col-span-3  rounded-xl dark:bg-slate-600 dark:text-white">
                  <Navbar />

                  <div className="py-4 px-4 ">
                    <AnimatePresence mode="wait"> {children}</AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
