import Image from "next/image";

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  art: { src: string; width: number; height: number; className?: string };
};

export default function ProjectCard({ title, subtitle, description, href, art }: Project) {
  return (
    <article className="group relative grid items-center gap-6 md:grid-cols-[1fr_1.35fr] md:gap-[clamp(2rem,8vw,9rem)]">
      <div className="w-[min(70%,433px)] justify-self-center">
        <Image
          src={art.src}
          alt=""
          aria-hidden
          width={art.width}
          height={art.height}
          className={`h-auto w-full transition-transform duration-300 motion-reduce:transition-none group-hover:scale-105 ${art.className ?? ""}`}
        />
      </div>
      <div>
        <h3 className="text-title font-semibold">
          {/* The whole card is clickable through this stretched link. */}
          <a href={href} className="after:absolute after:inset-0">
            {title}
          </a>
        </h3>
        <p className="text-sub font-semibold">{subtitle}</p>
        <p className="mt-4 max-w-[540px]">{description}</p>
      </div>
    </article>
  );
}
