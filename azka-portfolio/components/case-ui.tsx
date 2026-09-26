import type { ReactNode } from "react";
import Image from "next/image";

export function CaseHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-center text-sub font-semibold">{children}</h2>;
}

export function CaseSubheading({ children }: { children: ReactNode }) {
  return <h3 className="text-center text-case-sub font-semibold">{children}</h3>;
}

export function CaseLabel({ children }: { children: ReactNode }) {
  return <p className="text-center text-case-label font-semibold">{children}</p>;
}

export function BulletList({ items }: { items: { label?: string; text: string }[] }) {
  return (
    <ul className="list-disc space-y-1 pl-[1.2em] text-case-body">
      {items.map((item, i) => (
        <li key={i}>
          {item.label && <span className="font-bold">{item.label}: </span>}
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export function CaseImage({
  src,
  alt,
  width,
  height,
  className,
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
      className={`h-auto w-full rounded-lg object-cover shadow-md ${className ?? ""}`}
    />
  );
}
