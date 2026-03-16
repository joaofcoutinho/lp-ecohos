export default function GreenDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full bg-[#a8ff3e] ${className}`}
      style={{ boxShadow: "0 0 8px #a8ff3e, 0 0 16px rgba(168,255,62,0.4)" }}
    />
  );
}
