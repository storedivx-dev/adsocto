export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url(/tentacles-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,28,135,0.45),_transparent_42%),linear-gradient(180deg,#07040f_0%,rgba(7,4,15,0.72)_38%,#07040f_100%)]" />
      <div className="orb animate-pulse-soft left-[-8%] top-[-10%] h-[420px] w-[420px] bg-violet-600/40" />
      <div className="orb animate-pulse-soft right-[-6%] top-[12%] h-[380px] w-[380px] bg-fuchsia-500/25 [animation-delay:1.4s]" />
      <div className="orb bottom-[8%] left-[30%] h-[280px] w-[280px] bg-cyan-400/10" />
    </div>
  );
}
