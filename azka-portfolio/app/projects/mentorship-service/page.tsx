import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import { SocialLink } from "@/components/ui";

type BulletItem = { label?: string; text: string };

function BulletList({ items }: { items: BulletItem[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-6 text-case-body">
      {items.map((item, index) => (
        <li key={`${item.label ?? "item"}-${index}`}>
          {item.label && <span className="font-semibold">{item.label}: </span>}
          {item.text}
        </li>
      ))}
    </ul>
  );
}

function CaseHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-center text-case-sub font-semibold">{children}</h2>;
}

function CaseSubheading({ children }: { children: ReactNode }) {
  return <h3 className="text-center text-case-sub font-semibold">{children}</h3>;
}

function CaseLabel({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-center text-case-label font-semibold">{children}</p>;
}

function CaseImage({
  src,
  alt,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`h-auto w-full rounded-xl shadow-lg ${className}`}
    />
  );
}

// TODO: replace with real links (same as the home page).
const LINKEDIN_URL = "#";
const EMAIL_URL = "mailto:hello@example.com";

export const metadata: Metadata = {
  title: "Mentorship App | Azka Faisal",
  description: "Case study: streamlining Ummah Professionals' mentorship service.",
};

export default function MentorshipService() {
  return (
    <>
      <NavBar />
      <main className="bg-[#cdf1ff] px-6 py-[clamp(2rem,4vw,4.5rem)]">
        <div className="mx-auto flex max-w-[1450px] flex-col gap-[clamp(3rem,6vw,6.5rem)]">
          {/* Title + role info */}
          <div>
            <h1 className="text-center font-script text-title">Mentorship App</h1>
            <div className="mx-auto mt-6 max-w-[540px] text-case-body">
              <p>
                <span className="font-semibold">Role: </span>UI/UX Designer
              </p>
              <p className="mt-3 font-bold">Team:</p>
              <p>1 Designer (Me),</p>
              <p>1 Project Manager</p>
              <p>4 Software Developers</p>
            </div>
          </div>

          {/* The Problem */}
          <section className="mx-auto max-w-[1300px]">
            <CaseHeading>The Problem</CaseHeading>
            <div className="mt-6 space-y-4 text-case-body">
              <p>
                Ummah Professionals offer a mentorship service for students, but there are two major problems with
                their current process that makes it manual, which they would like to streamline.
              </p>
              <BulletList
                items={[
                  { label: "Mentor matching", text: "the UP team must manually match mentors to mentees" },
                  {
                    label: "Scheduling",
                    text: "the UP team must create a group chat with matched mentors and mentees, have them fill out a when2meet, and manually select a time for them to meet",
                  },
                  {
                    label: "Too many platforms",
                    text: "company website, Discord, spreadsheets, Messages group chat, and when2meet",
                  },
                ]}
              />
              <p>
                Our task was to build a new application that would solve these problems for the UP team, mentees,
                and mentors.
              </p>
            </div>
          </section>

          {/* User Research */}
          <section className="mx-auto max-w-[1300px]">
            <CaseHeading>User Research</CaseHeading>
            <CaseLabel>3 kinds of users, each with their own pain points</CaseLabel>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-center text-body font-semibold">Mentor: 1 Interviewed</h3>
                <div className="mt-4">
                  <p className="text-case-body">Pain Points:</p>
                  <BulletList
                    items={[
                      {
                        label: "Scheduling",
                        text: "need a mediator, need to input their times for each mentor",
                      },
                      {
                        label: "Unprepared Students",
                        text: "some don’t show up, or don’t have goals for the session",
                      },
                      { text: "Sometimes the mentors and mentees aren’t a match" },
                    ]}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-center text-body font-semibold">Mentees: 2 Interviewed</h3>
                <div className="mt-4 space-y-3">
                  <p className="text-case-body">
                    Validated problems user faced with the service, and discovered new pain points as well.
                    Questions included topics such as scheduling process, mentor process, and feedback on the UP
                    team.
                  </p>
                  <p className="text-case-body">Pain Points:</p>
                  <BulletList
                    items={[
                      { label: "Too much waiting", text: "need to wait for mentors to send their availability" },
                      {
                        label: "Unprepared Mentors",
                        text: "Mentors do not receive information about the students beforehand, so mentees spend the beginning of the session filling them in",
                      },
                      {
                        label: "No follow ups",
                        text: "Mentees don’t receive follow up emails to schedule more sessions to build a longer term connection",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stakeholder meeting + findings */}
          <section className="mx-auto max-w-[1300px]">
            <h3 className="text-center text-body font-semibold">Ummah Professionals Team Stakeholder Meeting</h3>
            <div className="mt-6">
              <p className="text-case-body">What we found</p>
              <BulletList
                items={[
                  {
                    label: "Too manual",
                    text: "need to mediate scheduling, matching, and following up",
                  },
                  {
                    label: "Room for error",
                    text: "sometimes mentors and mentees don’t match well, follow-ups don’t get sent, etc.",
                  },
                  {
                    label: "Hard to review feedback",
                    text: "no organized place to view session feedback, hard to collect this information as well",
                  },
                ]}
              />
            </div>
            <div className="mt-8">
              <CaseImage
                src="/assets/mentorship/journey-map-1.png"
                alt="User journey map: mentee activity scenario, from finding a mentor through completing sessions"
                width={1700}
                height={900}
              />
            </div>
            <CaseLabel>
              <span className="mt-8 block">UX Artifact: User Journey Map</span>
            </CaseLabel>
            <div className="mt-8 space-y-8">
              <CaseImage
                src="/assets/mentorship/journey-map-2.png"
                alt="User journey map covering the mentee's activity scenario in more detail"
                width={1700}
                height={900}
              />
              <CaseImage
                src="/assets/mentorship/journey-map-3.png"
                alt="A second user journey map, covering the mentor's activity scenario"
                width={1700}
                height={700}
              />
            </div>
          </section>

          {/* User Flow Diagrams */}
          <section className="mx-auto max-w-[1300px]">
            <CaseSubheading>User Flow Diagrams</CaseSubheading>
            <div className="mt-8">
              <CaseImage
                src="/assets/mentorship/user-flow.svg"
                alt="Flow diagram of how mentors and mentees move through matching and scheduling"
                width={1700}
                height={800}
                className="shadow-none"
              />
            </div>
          </section>

          {/* Prototype */}
          <section className="mx-auto max-w-[1300px]">
            <CaseSubheading>Figma Prototype</CaseSubheading>
            <div className="mt-8">
              <CaseImage
                src="/assets/mentorship/wireframes.png"
                alt="Grid of high-fidelity Figma screens making up the app prototype"
                width={1475}
                height={1402}
              />
            </div>
            <p className="mx-auto mt-6 max-w-[900px] text-center text-case-label font-semibold">
              This Figma prototype was handed off to the developer team to become a working AWS-deployed app.
            </p>
          </section>

          {/* Design Decisions */}
          <section className="mx-auto max-w-[1300px]">
            <CaseSubheading>Design Decisions</CaseSubheading>
            <div className="mt-8 flex flex-col gap-16">
              <div>
                <h4 className="text-center text-case-sub font-semibold">Mentor Matching</h4>
                <div className="mt-4 grid items-center gap-8 md:grid-cols-2">
                  <div className="space-y-3 text-case-body">
                    <p>
                      Since mentees expressed a desire to pick their own mentors, and mentors sometimes felt the
                      mentees weren’t a perfect match, mentees are now able to pick mentors to schedule meetings
                      with.
                    </p>
                    <BulletList
                      items={[
                        { text: "They can view the mentor’s information beforehand" },
                        { text: "The system gives a recommended mentor to make it easier to decide" },
                      ]}
                    />
                  </div>
                  <CaseImage
                    src="/assets/mentorship/mentor-matching.png"
                    alt="Screen showing the mentor matching and recommendation flow"
                    width={745}
                    height={486}
                  />
                </div>
              </div>

              <div>
                <h4 className="text-center text-case-sub font-semibold">Easy Scheduling</h4>
                <div className="mt-4 grid items-center gap-8 md:grid-cols-2">
                  <div className="space-y-3 text-case-body">
                    <p>The mentors and mentees both set their availability when they create an account.</p>
                    <BulletList
                      items={[
                        {
                          text: "This creates less fatigue for mentors for scheduling meetings. They only set their office hours and update periodically, no need to fill out a when2meet for every mentee.",
                        },
                        {
                          text: "The availability syncs with Google Calendar so mentors and mentees can automatically see each other’s conflicts.",
                        },
                        {
                          text: "The system gives the earliest mutual free time for a meeting automatically, and others can be selected",
                        },
                        { text: "Easy rescheduling and cancelling within time limits" },
                      ]}
                    />
                  </div>
                  <CaseImage
                    src="/assets/mentorship/scheduling.png"
                    alt="Screen showing the availability and scheduling flow"
                    width={755}
                    height={450}
                  />
                </div>
              </div>

              <div>
                <h4 className="text-center text-case-sub font-semibold">Admin Dashboard</h4>
                <div className="mt-4 grid items-center gap-8 md:grid-cols-2">
                  <div className="space-y-3 text-case-body">
                    <p>
                      In the words of my information systems professor, a spreadsheet is not a database. So I
                      designed an admin dashboard where the Ummah Professionals team can easily view
                    </p>
                    <BulletList
                      items={[{ text: "Feedback" }, { text: "Help Requests" }, { text: "Mentors and Mentees" }]}
                    />
                    <p>They can also join, schedule, and cancel all meetings that happen in the app.</p>
                  </div>
                  <CaseImage
                    src="/assets/mentorship/admin-dashboard.png"
                    alt="Screen showing the admin dashboard for reviewing feedback and requests"
                    width={768}
                    height={438}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* User Testing */}
          <section className="mx-auto max-w-[1200px]">
            <CaseSubheading>User Testing</CaseSubheading>
            <p className="mx-auto mt-4 max-w-[1100px] text-center text-case-body">
              Testing the usability of the product after it is fully developed with one mentor tester.
            </p>
            <div className="mt-6">
              <p className="text-center text-case-body font-semibold">Changes Needed</p>
              <BulletList
                items={[
                  { text: "Skipped over the resume upload step" },
                  { text: "Wanted more relevant career fields to choose from" },
                  { text: "Wanted a custom meeting link instead of a generic one" },
                  { text: "Unclear which onboarding questions were mandatory" },
                  { text: "The mentor-matching algorithm needed fixing" },
                ]}
              />
            </div>
          </section>

          {/* Reflection */}
          <section className="mx-auto grid max-w-[1300px] gap-12 md:grid-cols-2">
            <div>
              <p className="text-center text-case-sub font-semibold">What I would do differently</p>
              <BulletList
                items={[
                  { text: "Be able to conduct more user research" },
                  { text: "Better communication during handoff" },
                  { text: "Have more polished UI" },
                ]}
              />
            </div>
            <div>
              <p className="text-center text-case-sub font-semibold">Lessons Learned</p>
              <BulletList
                items={[
                  { text: "If you have a new idea, try it" },
                  { text: "Stay disciplined" },
                  { text: "Apply feedback" },
                ]}
              />
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-lavender px-6 py-[clamp(1.5rem,2.7vw,2.9rem)]">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <p>Thanks for stopping by, let’s keep in touch!</p>
          <nav aria-label="Social" className="flex gap-[clamp(1.5rem,4vw,5rem)]">
            <SocialLink href={LINKEDIN_URL} label="LinkedIn" />
            <SocialLink href={EMAIL_URL} label="Email" />
          </nav>
        </div>
      </footer>
    </>
  );
}
