"use client";

import { useState, useEffect } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import Footer from "@/components/Footer";

export default function Slide() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    }

    handleResize(); // set on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {!isMobile && <LeftSidebar />}

      {/* Main + Footer */}
      <div className="flex flex-col flex-1">
        {/* Main Content */}
        <main className="flex-1 p-10 bg-white">
          <h1 className="text-3xl font-bold mb-6 text-blue-900">Slide Deck</h1>

          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSXZfq1iTPPjBGqjep8tkCKIH3es0KHkrDxiEHDb6J0_p1m0NehSV53nc5QcsSD7mdC4-7np49bDyxr/pubembed?start=false&loop=false&delayms=3000"
            frameborder="0"
            width="960"
            height="569"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            className="w-full max-w-4xl mx-auto"
          ></iframe>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
