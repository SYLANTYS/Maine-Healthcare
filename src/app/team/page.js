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
                Maine (Class of 2026), majoring in kinesiology and exercise
                science with a minor in political science and legal studies.
                Working in the health field, I often hear discussions about
                health care access and affordability. I recently completed a
                similar project in another class, which further highlighted the
                importance of this topic. It&apos;s crucial for everyone to
                understand, as it directly impacts both health and finances.{" "}
              </p>
            </div>
            <div className="flex-shrink-0 p-4">
              <Image
                src="/grey.jpg"
                alt="Grey Vanderwood"
                width={300}
                height={300}
                className="rounded-lg object-cover border border-gray-300 shadow-lg shadow-gray-500/50"
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
                concentration at the University of Maine (Class of 2027). I am
                very passionate about helping people who are more vulnerable in
                the community. I have had very close family members and friends
                experience the impact of the lack of access to healthcare and
                the struggle with healthcare affordability. I think that it is
                extremely important to seek solutions for this worldwide problem
                so that the overall health and well-being of our community can
                increase.{" "}
              </p>
            </div>
            <div className="flex-shrink-0 p-4">
              <Image
                src="/haley.png"
                alt="Haley Ryan"
                width={300}
                height={300}
                className="rounded-lg object-cover shadow-lg shadow-gray-500/50"
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
                Hey everyone! I&apos;m currently a sophomore at the University
                of Maine (Class of 2027), double majoring in Finance and
                Business Information Systems with a minor in Mechanical
                Engineering. I&apos;ve always been interested in how large-scale
                systems, such as healthcare, impact both individuals and the
                economy. I was an analyst for the healthcare sector for SPIFFY,
                which gave me a closer look into the financial and operational
                challenges within the healthcare industry. Our issue of health
                care affordability affects not only personal well-being but also
                our communities&apos; future.
              </p>
            </div>
            <div className="flex-shrink-0 p-4">
              <Image
                src="/patrick.jpg"
                alt="Patrick Sylantys"
                width={300}
                height={300}
                className="rounded-lg object-cover shadow-lg shadow-gray-500/50"
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
              This Wicked Problems project gave me the chance to apply skills
              from English 317 to a real-world issue, combining research,
              writing, and design in a meaningful way. One of the biggest
              takeaways from the course was learning how to write to specific
              audiences, something we practiced through one-pagers, professional
              letters, and the white paper. For this project, our intended
              audience included students, university administrators, and
              healthcare staff, so we had to adapt our tone and structure
              accordingly. We used rhetorical strategies such as ethos by
              including bios that showed our personal connection to the issue
              and logos by presenting statistics and a clear graphic in our
              infographic to highlight the state of healthcare accessibility in
              Maine. Instead of proposing a solution that might overreach our
              role, we chose to focus on awareness, encouraging people at UMaine
              to consider where the system may fall short and ask the right
              questions. That goal informed not only our message but also the
              structure of our white paper and supporting materials.
            </p>
            <br></br>
            <p
              className="indent-8"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              I built the project website, where I applied design principles
              from class to ensure our content was visually effective. We used
              contrast to make important elements stand out, centered key
              information on each page for better visibility, and repeated
              visual elements like dark blue headers to keep the design
              consistent. Our team divided the work strategically: some focused
              on research, others developed public-facing materials like the
              infographic, one led the slideshow, and I handled the website.
              This collaboration mirrored real-world projects like pitch decks
              or internal reports, where each person brings a specific skill,
              but the pieces must align. The experience helped me better
              understand how to combine clarity, design, and persuasion to
              communicate a complex topic. It also showed how technical writing
              and design principles can make an issue more accessible to people
              who might not have background knowledge. These are skills I can
              carry into finance, where presenting data clearly and persuasively
              is often just as important as the numbers themselves.
            </p>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
