"use client";

import { useState, useEffect } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Team() {
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
        <main className="flex-1 p-10 bg-white text-black">
          <h1 className="text-3xl font-bold mb-6 text-blue-900">
            Meet The Team
          </h1>

          {/* Grey Vanderwood */}
          <div className="flex flex-col md:flex-row items-center mb-12  mx-30">
            <div className="flex-1 p-4">
              <h2 className="text-xl font-bold mb-4 text-blue-900">
                Grey Vanderwood
              </h2>
              <p style={{ fontFamily: "Times New Roman, serif" }}>
                What up y&apos;all! I am currently a junior at the University of
                Maine, majoring in kinesiology and exercise science with a minor
                in political science and legal studies. Working in the health
                field, I often hear discussions about health care access and
                affordability. I recently completed a similar project in another
                class, which further highlighted the importance of this topic.
                It&apos;s crucial for everyone to understand, as it directly
                impacts both health and finances.{" "}
              </p>
            </div>
            <div className="flex-shrink-0 p-4">
              <Image
                src="/grey.jpg"
                alt="Grey Vanderwood"
                width={300}
                height={300}
                className="rounded-lg object-cover border border-gray-300"
              />
            </div>
          </div>

          {/* Haley Ryan */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 mx-30">
            <div className="flex-1 p-4">
              <h2 className="text-xl font-bold mb-4 text-blue-900">
                Haley Ryan
              </h2>
              <p style={{ fontFamily: "Times New Roman, serif" }}>
                I am a Sophomore studying Biology with a Pre-Medical
                concentration at the University of Maine. I am very passionate
                about helping people who are more vulnerable in the community. I
                have had very close family members and friends experience the
                impact of the lack of access to healthcare and the struggle with
                healthcare affordability. I think that it is extremely important
                to seek solutions for this worldwide problem so that the overall
                health and well-being of our community can increase.{" "}
              </p>
            </div>
            <div className="flex-shrink-0 p-4">
              <Image
                src="/haley.png"
                alt="Haley Ryan"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Patrick Sylantys */}
          <div className="flex flex-col md:flex-row items-center mb-12  mx-30">
            <div className="flex-1 p-4">
              <h2 className="text-xl font-bold mb-4 text-blue-900">
                Patrick Sylantys
              </h2>
              <p style={{ fontFamily: "Times New Roman, serif" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex-shrink-0 p-4">
              <Image
                src="/patrick.jpg"
                alt="Patrick Sylantys"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-20 mt-30 text-blue-900 text-center">
            Reflections
          </h1>

          <div className="px-30">
            <h2 className="text-lg font-bold mb-6 text-black">
              Grey Vanderwood - Reflections
            </h2>
            <p
              className="indent-8  mb-20"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              This Wicked Problems project has given me a valuable opportunity
              to explore important issues within my field of study while
              applying a variety of skills developed throughout the semester.
              These skills include creating infographics, writing professional
              memorandums, and conducting thorough research. Engaging with this
              topic has been particularly challenging, as it represents a true
              &quot;wicked problem&quot; one that is complex, difficult to
              define, and resistant to straightforward solutions. The limited
              information on the issue made the research process more difficult,
              and finding solutions to contribute to ongoing efforts was even
              more difficult. We ended up settling on spreading awareness of the
              issue and possibly having Cutler Health Center price lock student
              and faculty member care, so students don&apos;t have medical debt
              on top of their student loan debt.
            </p>
            <h2 className="text-lg font-bold mb-6 text-black">
              Haley Ryan - Reflections
            </h2>
            <p
              className="indent-8  mb-20"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              This project has allowed me to use many of the skills that I have
              obtained throughout this course. From graphic design,
              workplace-specific writing, to the white paper project, I
              developed the transferable skills and confidence to navigate
              through this wicked problem. Research was a major component of
              this project; finding and analyzing data, websites, articles, and
              other published information was extremely important in working
              through this wicked problem. Finding the intended audience of each
              piece of writing allowed me to become more aware of writing to
              specific audiences and stakeholders for this project. With this,
              rhetorical analysis and using the rhetorical triangle was crucial
              in order to understand writing with intention and observing the
              problem from the viewpoint of our specific stakeholder.
              Understanding key components of graphic design was vital in this
              project as well. Our infographic was efficiently designed while
              being mindful of concepts such as alignment, repetition, color,
              font, and spacing/separation. In all, the tools that I have
              learned throughout this semester have helped me contribute to a
              project that can truly help others.{" "}
            </p>
            <h2 className="text-lg font-bold mb-6 text-black">
              Patrick Sylantys - Reflections
            </h2>
            <p
              className="indent-8"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
