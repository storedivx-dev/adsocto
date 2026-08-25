import Image from "next/image";
import Link from "next/link";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const px = size === "sm" ? 36 : size === "lg" ? 52 : 42;
  const type =
    size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span
        className="relative overflow-hidden rounded-full ring-1 ring-fuchsia-300/30 shadow-[0_0_24px_rgba(168,85,247,0.45)]"
        style={{ width: px, height: px }}
      >
        <Image
          src="/octopus-logo.png"
          alt="AdsOcto octopus mark"
          width={px}
          height={px}
          className="logo-mark h-full w-full scale-110 object-cover"
          priority
        />
      </span>
      <span className={`font-display font-bold tracking-tight ${type}`}>
        ads
        <span className="gradient-text">octo</span>
      </span>
    </Link>
  );
}
