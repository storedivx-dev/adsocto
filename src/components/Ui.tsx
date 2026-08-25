import Link from "next/link";

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";
  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={`${base} border border-white/15 bg-white/5 text-white hover:border-fuchsia-300/40 hover:bg-white/10`}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link href={href} className={`${base} glow-btn text-white`}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-base leading-7 text-muted">{body}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  actions,
}: {
  eyebrow: string;
  title: string;
  body: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className="container-page pb-10 pt-16 sm:pt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-300">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{body}</p>
      {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
    </section>
  );
}
