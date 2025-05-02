"use client";

import { useState, useEffect } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import Footer from "@/components/Footer";

export default function WorkCited() {
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
          <h1 className="text-3xl font-bold mb-6 text-blue-900">Work Cited</h1>
          <div
            className="px-10 w-[80%] flex flex-col gap-4"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            <p className="text-black -indent-8 text-base/9">
              Delaney, K. (2024, October).{" "}
              <i>Northern Light Health addresses mounting financial hurdles</i>{" "}
              | <i>newscentermaine.com.</i> News Center Maine.
              https://www.newscentermaine.com/article/news/health/health-beat/northern-light-health-addresses-mounting-financial-struggles-maine/97-37ac33ee-af2e-4ce5-9e66-3460b23dc526
            </p>
            <p className="text-black -indent-8 text-base/9">
              Healthcare Value Hub. (2022, January). <i>Maine</i>.{" "}
              https://healthcarevaluehub.org/maine/#:~:text=More%20than%20half%20(55%25),recommended%20medical%20test%20or%20treatment
            </p>
            <p className="text-black -indent-8 text-base/9">
              Observer Staff. (2025, February 5).{" "}
              <i>Northern Light’s credit rating plummets. Observer.</i>{" "}
              https://observer-me.com/2025/02/05/news/northern-lights-credit-rating-plummets/
            </p>
            <p className="text-black -indent-8 text-base/9">
              Press Herald. (2012, December 18). <i>MaineCare settlements.</i>{" "}
              https://www.pressherald.com/2012/12/18/mainecare-settlements-tk/
            </p>
            <p className="text-black -indent-8 text-base/9">
              Wight, P. (2025, February 5).{" "}
              <i>
                Northern Light Health’s credit rating downgraded due to
                persistent operating losses
              </i>
              . Maine Public.
              https://www.mainepublic.org/health/2025-02-05/northern-light-healths-credit-rating-downgraded-due-to-persistent-operating-losses{" "}
            </p>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
