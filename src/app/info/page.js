"use client";

import { useState, useEffect } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import Footer from "@/components/Footer";

export default function Infographic() {
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
          <h1 className="text-3xl font-bold mb-6 text-blue-900">
            Public Material
          </h1>

          <iframe
            src="https://drive.google.com/file/d/1t3zyOzg7_yLCe0BVr2IrS_X4BLiMChTq/preview"
            width="640"
            height="640"
            allow="autoplay"
            className="w-full max-w-4xl mx-auto"
          ></iframe>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
