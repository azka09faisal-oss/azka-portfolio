import Image from "next/image";

export function Star({ className }: { className: string }) {
  return <Image src="/assets/star.svg" alt="" aria-hidden width={24} height={24} className={className} />;
}

export function SectionHeading({ children, className }: { children: React.ReactNode; className: string }) {
  return <h2 className={`text-center font-script ${className}`}>{children}</h2>;
}

export function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="flex items-center gap-[0.4em] underline-offset-8 hover:underline">
      <Star className="size-[1.5em] shrink-0" />
      {label}
    </a>
  );
}
