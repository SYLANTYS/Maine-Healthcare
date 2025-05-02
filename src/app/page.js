"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LeftSidebar from "@/components/LeftSidebar";
import Footer from "@/components/Footer";

export default function Page() {
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
        {/* Image at top */}
        <div className="relative w-full h-140">
          <Image
            src="/Stillwater.jpg"
            alt="Stillwater Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <h1 className="text-white text-4xl font-light">
              Healthcare Accessibility in Maine
            </h1>
          </div>
        </div>
        <p className="text-gray-400 text-xs bg-white p-2 text-center">
          <i>
            Image: Stillwater River. (Courtesy of
            https://en.wikipedia.org/wiki/Stillwater_River_%28Maine%29)
          </i>
        </p>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center mt-10">
            Problem Statement
          </h2>
          <p
            className="mb-4 text-black mx-40"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            A wicked problem is a societal issue that is often interconnected
            with other issues and across sectors. These problems cannot be
            resolved but only improved upon. They need to be addressed in
            creative ways by people with different backgrounds to get the full
            picture of the problem. Our wicked problem is healthcare access in
            Maine, particularly how it affects the University of Maine
            community, where Northern Light Health is a key provider. According
            to a 2021 survey of about 920 Maine adults, 80% expressed concern
            about affording healthcare in the future (Healthcare Value Hub).
            <br></br>
            <br></br>
            <br></br>
            Like many healthcare systems across the country, Northern Light
            Health has faced significant financial pressure. One of its
            hospitals was closed and others relocated—decisions that likely
            reflect broader challenges in rural healthcare delivery rather than
            isolated issues. These changes could potentially impact UMaine
            students and staff if access to on-campus healthcare becomes
            limited. According to Northern Light's Chief Financial Officer James
            Rohrbaugh, &quot;with Medicare and MaineCare reimbursements, there's
            a $300 million difference yearly between what it costs to care for
            patients and what Northern Light is paid&quot; (NewsCenterMaine).
            The organization also carries approximately $620 million in debt,
            which has contributed to increased costs for some goods and services
            in an effort to maintain financial stability (Observer ME).
            <br></br>
            <br></br>
            <br></br>
            We aim to bring awareness to the growing concerns around healthcare
            affordability and access at the University of Maine. The possibility
            of rising healthcare prices is especially relevant to UMaine
            students and staff, given Northern Light's recent hospital
            restructuring. These financial strains not only affect the
            accessibility and quality of care, but also have the potential to
            impact the job security of campus health workers. By highlighting
            this issue, we hope to encourage more informed conversations about
            how healthcare systems, universities, and policymakers can work
            together to support community health.
          </p>
          <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center mt-16">
            Questions?
          </h2>
          <p className="text-black text-center">
            <i>Contact the team to get more information on the project!</i>
          </p>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
