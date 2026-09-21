import Image from "next/image";
import NavBar from "@/components/NavBar";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import { SectionHeading, SocialLink, Star } from "@/components/ui";

// TODO: replace with real links.
const LINKEDIN_URL = "#";
const EMAIL_URL = "mailto:hello@example.com";

const projects: Project[] = [
  {
    title: "Mentorship Service",
    subtitle: "Internship Project",
    description: "Streamlining Ummah Professionals’ process for providing students with career mentorship",
    href: "#", // TODO
    art: { src: "/assets/heart-blue.svg", width: 417, height: 345, className: "rotate-[-5.43deg]" },
  },
  {
    title: "EcoTracker",
    subtitle: "Class Project",
    description: "UX Design Project about Sustainability Goal Tracking",
    href: "#", // TODO
    art: { src: "/assets/heart-green.svg", width: 433, height: 363 },
  },
  {
    title: "LinkTheLocal",
    subtitle: "Design Jam Project",
    description: "Product Design project helping college students gain experience for the job market",
    href: "#", // TODO
    art: { src: "/assets/heart-red.svg", width: 388, height: 339, className: "rotate-[-12.45deg]" },
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="overflow-x-clip">
        {/* Hero */}
        <section
          id="home"
          className="relative overflow-hidden bg-hero px-6 pt-[clamp(1rem,3.4vw,3.6rem)] pb-[clamp(4rem,13vw,14.4rem)]"
        >
          <Image src="/assets/moon.svg" alt="" aria-hidden width={253} height={323} priority
            className="pointer-events-none absolute top-[18%] left-[10.6%] hidden w-[14.6vw] sm:block" />
          <Image src="/assets/cloud-right.svg" alt="" aria-hidden width={439} height={299}
            className="pointer-events-none absolute top-[46%] left-[77.7%] hidden w-[25.4vw] sm:block" />

          <div className="relative mx-auto max-w-[800px] text-center">
            <h1>
              <span className="sr-only">Azka Faisal</span>
              <Image src="/assets/name.svg" alt="" aria-hidden width={748} height={162} priority
                className="mx-auto h-auto w-full max-w-[748px]" />
            </h1>
            <p className="mt-[clamp(0.5rem,3.4vw,3.6rem)] flex items-center justify-center gap-[0.4em] text-sub">
              UI/UX Design <Star className="size-[0.5em] shrink-0" /> Product Design
            </p>
          </div>
          <p className="relative mx-auto mt-[clamp(1rem,3.4vw,3.6rem)] max-w-[745px]">
            Making an impact on people’s lives through intuitive design.
            <br />
            Learn more about me or my projects below!
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-blush px-6 pb-[clamp(3rem,6vw,6rem)]">
          <SectionHeading className="text-heading">Projects</SectionHeading>
          <div className="mx-auto mt-[clamp(1.5rem,3vw,3rem)] flex max-w-[1400px] flex-col gap-[clamp(2rem,4vw,4.5rem)]">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-about px-6 pb-[clamp(3rem,7vw,7rem)]">
          <SectionHeading className="text-display">About me :)</SectionHeading>
          <div className="mx-auto mt-[clamp(1rem,3vw,3rem)] grid max-w-[1400px] items-start gap-8 md:grid-cols-[775fr_623fr] md:gap-[clamp(2rem,5vw,4.5rem)]">
            <p className="indent-10">
              Hi! I’m Azka and I am a second year human computer interaction student at New Jersey Institute of
              Technology. I am currently interested in roles in UI/UX design, product design, and project
              management. I have had previous experience working as a UI/UX design intern and I’m currently
              building some projects. I enjoy the intersection of design, psychology, and technology.
            </p>
            <div className="relative">
              <div className="relative aspect-[623/635] overflow-hidden">
                <Image src="/assets/photo.png" alt="Azka sitting at an outdoor table, smiling" width={815} height={1246}
                  className="absolute top-[-39.02%] left-0 h-[196.21%] w-[130.89%] max-w-none" />
              </div>
              <Image src="/assets/flower.svg" alt="" aria-hidden width={396} height={376}
                className="pointer-events-none absolute top-[-27%] left-[52%] w-[68%] rotate-[-4.95deg]" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-lavender px-6 py-[clamp(1.5rem,2.7vw,2.9rem)]">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <p>Thanks for stopping by, let’s keep in touch!</p>
          <nav aria-label="Social" className="flex gap-[clamp(1.5rem,4vw,5rem)]">
            <SocialLink href="https://www.linkedin.com/in/azka-faisal/" label="LinkedIn" />
            <SocialLink href="mailto:af594@njit.edu" label="Email" />
          </nav>
        </div>
      </footer>
    </>
  );
}
