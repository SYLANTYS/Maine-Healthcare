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
            <h1 className="text-white text-4xl font-light">Maine Healthcare</h1>
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
            picture of the problem.
            <br></br>
            <br></br>
            <br></br>
            Our wicked problem is dealing with health care access in Maine,
            primarily Northern Light Health Care since they provide medical care
            on the University of Maine campus. According to a survey of around
            920 Maine adults in October 2021, 80% are worried about affording
            healthcare in the future (Healthcare Value Hub). Recently, Northern
            Light has had to close one of their hospitals and relocate others
            due to revenue issues and debt. This could potentially impact UMaine
            students and staff if they stop providing healthcare to UMaine. The
            debt can be attributed to MaineCare and Medicare says Northern Light
            Health Chief Financial Officer James Rohrbaugh “with Medicare and
            MaineCare reimbursements, there’s a $300 million difference yearly
            between what it costs to care for patients and what Northern Light
            is paid” (NewsCenterMaine). Due to the $620 million in debt,
            Northern Light has to increase the cost for goods and service to
            combat their financial issue (Observer ME).
            <br></br>
            <br></br>
            <br></br>
            We aim to bring awareness to healthcare access and affordability on
            the University of Maine’s campus. The potential for Northern Light
            Health to increase healthcare prices is relevant to UMaine staff,
            especially since Northern Light has closed hospitals recently,
            likely attempting to reduce their debts, which are in the hundreds
            of millions. These issues affect the access to healthcare and
            quality of healthcare delivered to students. As a result, the
            overall job security of employees due to budget cuts is jeopardized.
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
